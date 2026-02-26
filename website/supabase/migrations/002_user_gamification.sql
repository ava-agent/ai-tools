-- 用户游戏化数据表（镜像 gamification store 状态）
CREATE TABLE IF NOT EXISTS public.user_gamification (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INTEGER NOT NULL DEFAULT 0 CHECK (xp >= 0),
  streak_current INTEGER NOT NULL DEFAULT 0 CHECK (streak_current >= 0),
  streak_longest INTEGER NOT NULL DEFAULT 0 CHECK (streak_longest >= 0),
  streak_last_visit_date DATE,
  tools_viewed TEXT[] NOT NULL DEFAULT '{}',
  quizzes_completed INTEGER NOT NULL DEFAULT 0 CHECK (quizzes_completed >= 0),
  quiz_best_score INTEGER NOT NULL DEFAULT 0 CHECK (quiz_best_score >= 0),
  battles_voted INTEGER NOT NULL DEFAULT 0 CHECK (battles_voted >= 0),
  matcher_completed INTEGER NOT NULL DEFAULT 0 CHECK (matcher_completed >= 0),
  comparisons_used INTEGER NOT NULL DEFAULT 0 CHECK (comparisons_used >= 0),
  personality_result TEXT,
  first_visit_date DATE,
  visit_dates DATE[] NOT NULL DEFAULT '{}',
  daily_tool_seen DATE,
  battle_votes JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 创建档案时自动创建游戏化数据行
CREATE OR REPLACE FUNCTION public.handle_new_profile()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.user_gamification (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_profile();

-- updated_at 自动更新
CREATE TRIGGER trg_user_gamification_updated_at
  BEFORE UPDATE ON public.user_gamification
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- RLS 策略
ALTER TABLE public.user_gamification ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own gamification"
  ON public.user_gamification FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own gamification"
  ON public.user_gamification FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own gamification"
  ON public.user_gamification FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own gamification"
  ON public.user_gamification FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
