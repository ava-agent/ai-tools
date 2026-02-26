-- ============================================
-- 社区功能: 工具评分、评论、对决投票
-- ============================================

-- 工具评分
CREATE TABLE IF NOT EXISTS public.tool_ratings (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id VARCHAR(100) NOT NULL CHECK (char_length(tool_id) >= 1),
  rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, tool_id)
);

CREATE INDEX idx_tool_ratings_tool_id ON public.tool_ratings(tool_id);

CREATE TRIGGER trg_tool_ratings_updated_at
  BEFORE UPDATE ON public.tool_ratings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.tool_ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view all ratings"
  ON public.tool_ratings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Anyone can view rating stats"
  ON public.tool_ratings FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can insert own ratings"
  ON public.tool_ratings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own ratings"
  ON public.tool_ratings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- 评分统计视图（security_invoker 确保 RLS 透过视图生效）
CREATE OR REPLACE VIEW public.tool_rating_stats
WITH (security_invoker = true)
AS
SELECT
  tool_id,
  COUNT(*)::INTEGER AS rating_count,
  ROUND(AVG(rating)::NUMERIC, 1) AS avg_rating
FROM public.tool_ratings
GROUP BY tool_id;

-- ============================================
-- 工具评论
-- ============================================

CREATE TABLE IF NOT EXISTS public.tool_reviews (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id VARCHAR(100) NOT NULL CHECK (char_length(tool_id) >= 1),
  content TEXT NOT NULL CHECK (char_length(content) >= 10 AND char_length(content) <= 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, tool_id)
);

CREATE INDEX idx_tool_reviews_tool_id ON public.tool_reviews(tool_id);
CREATE INDEX idx_tool_reviews_user_id ON public.tool_reviews(user_id);

CREATE TRIGGER trg_tool_reviews_updated_at
  BEFORE UPDATE ON public.tool_reviews
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.tool_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view reviews"
  ON public.tool_reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert reviews"
  ON public.tool_reviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON public.tool_reviews FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews"
  ON public.tool_reviews FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- ============================================
-- 对决投票
-- ============================================

CREATE TABLE IF NOT EXISTS public.battle_votes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  matchup_key VARCHAR(200) NOT NULL,
  winner_id VARCHAR(100) NOT NULL,
  dimension_id VARCHAR(100) NOT NULL,
  tool_a_id VARCHAR(100) NOT NULL,
  tool_b_id VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, matchup_key),
  -- winner 必须是参赛工具之一
  CONSTRAINT chk_winner_valid CHECK (winner_id = tool_a_id OR winner_id = tool_b_id),
  -- 两个工具不能相同
  CONSTRAINT chk_tools_distinct CHECK (tool_a_id <> tool_b_id)
);

CREATE INDEX idx_battle_votes_matchup ON public.battle_votes(matchup_key);

ALTER TABLE public.battle_votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view battle votes"
  ON public.battle_votes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert votes"
  ON public.battle_votes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 投票统计视图
CREATE OR REPLACE VIEW public.battle_vote_stats
WITH (security_invoker = true)
AS
SELECT
  matchup_key,
  tool_a_id,
  tool_b_id,
  dimension_id,
  COUNT(*) FILTER (WHERE winner_id = tool_a_id)::INTEGER AS tool_a_votes,
  COUNT(*) FILTER (WHERE winner_id = tool_b_id)::INTEGER AS tool_b_votes,
  COUNT(*)::INTEGER AS total_votes
FROM public.battle_votes
GROUP BY matchup_key, tool_a_id, tool_b_id, dimension_id;
