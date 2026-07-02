> Maintenance note (2026-06-28): this is a historical 2026-02-04 report. Current dev server defaults are
npm run dev on http://127.0.0.1:8765/ and
npm run preview on http://127.0.0.1:8766/; old 8767 references below are retained as historical evidence only.

# AI-Tools Website 闂淇瀹屾垚鎶ュ憡

## 淇鏃ユ湡
2026-02-04

## 淇鐨勯棶棰?

### 1. 鏁版嵁瀵煎叆閿欒 鉁?
**闂**: `Cannot read properties of undefined (reading 'length')`

**鍘熷洜鍒嗘瀽**:
- 鏌愪簺缁勪欢鍦ㄨ闂暟缁勫睘鎬ф椂娌℃湁杩涜闃插尽鎬ф鏌?
- 鏁版嵁鍙兘鍦ㄦ煇浜涙儏鍐典笅涓?undefined

**淇鏂规**:
- 鍦?`ToolGrid.vue` 涓坊鍔犻槻寰℃€ф鏌? `{{ tools?.length || 0 }}`
- 鍦?`SearchBar.vue` 涓坊鍔犳鏌? `v-if="allTags && allTags.length > 0"`
- 鍦?`Matcher.vue` 涓坊鍔犳鏌? `v-for="scenario in (scenarioGuide || [])"`

### 2. 绔彛鍐茬獊闂 鉁?
**闂**: 甯哥敤绔彛锛?000, 3001, 3002锛夌粡甯歌鍗犵敤

**淇鏂规**:
- 鏇存柊 `vite.config.js` 浣跨敤绔彛 8765
- 璁剧疆 `strictPort: false` 鍏佽鑷姩瀵绘壘鍙敤绔彛
- 鏈嶅姟鍣ㄦ渶缁堣繍琛屽湪 `http://127.0.0.1:8767/`

---

## CLI 娴嬭瘯楠岃瘉缁撴灉

### 椤甸潰璁块棶娴嬭瘯
| 椤甸潰 | URL | 鐘舵€?|
|------|-----|------|
| 棣栭〉 | `/` | 鉁?姝ｅ父 |
| 宸ュ叿鍖归厤鍣?| `/matcher` | 鉁?姝ｅ父 |
| 璁㈤槄鎸囧崡 | `/pricing` | 鉁?姝ｅ父 |
| 宸ヤ綔娴?| `/workflows` | 鉁?姝ｅ父 |
| 瀵规瘮鍒嗘瀽 | `/comparison` | 鉁?姝ｅ父 |

### 鏋勫缓娴嬭瘯
```
鉁?1492 modules transformed
鉁?built in 4.72s
```

鎵€鏈夋柊椤甸潰閮借姝ｇ‘鎵撳寘锛?
- `Matcher-0l3uj_hr.js` (8.60 kB)
- `Pricing-CmMMKHKo.js` (7.55 kB)
- `Workflows-BXl8t3RF.js` (9.37 kB)

---

## 鏈嶅姟鍣ㄤ俊鎭?

**寮€鍙戞湇鍔″櫒鍦板潃**: `http://127.0.0.1:8767/`

**鍚姩鍛戒护**:
```bash
cd ai_tools/ai-tools/website
npm run dev
```

---

## 淇敼鐨勬枃浠跺垪琛?

### 鏁版嵁瀵煎叆淇
1. `src/components/ToolGrid.vue` - 娣诲姞 tools?.length 妫€鏌?
2. `src/components/SearchBar.vue` - 娣诲姞 allTags 妫€鏌?
3. `src/views/Matcher.vue` - 娣诲姞 scenarioGuard 妫€鏌?

### 閰嶇疆淇敼
4. `vite.config.js` - 鏇存柊绔彛涓?8765锛屾坊鍔?host 閰嶇疆

---

## 濡備綍璁块棶

### 娴忚鍣ㄨ闂?
鐩存帴璁块棶: `http://127.0.0.1:8767/`

### 瀵艰埅鏍忓叆鍙?
椤甸潰椤堕儴瀵艰埅鏍忓寘鍚互涓嬮摼鎺ワ細
- **宸ュ叿鍒楄〃** - 棣栭〉锛屽睍绀烘墍鏈?AI 宸ュ叿
- **宸ュ叿鍖归厤** - 浜や簰寮忓喅绛栨爲宸ュ叿鍖归厤鍣?
- **璁㈤槄鎸囧崡** - 瀹氫环鍜屾垚鏈紭鍖栫瓥鐣?
- **宸ヤ綔娴?* - 鏈€浣冲疄璺靛伐浣滄祦鏂规
- **瀵规瘮鍒嗘瀽** - 宸ュ叿妯悜瀵规瘮

### 绉诲姩绔?
鐐瑰嚮鍙充笂瑙掓眽鍫¤彍鍗曞浘鏍囷紝鏌ョ湅鎵€鏈夊鑸摼鎺?

---

## 闃插尽鎬х紪绋嬫敼杩?

鎵€鏈夋暟缁勮闂幇鍦ㄩ兘浣跨敤鍙€夐摼鎿嶄綔绗︽垨鏉′欢妫€鏌ワ細

```vue
<!-- 涔嬪墠 -->
{{ tools.length }}
v-if="tools.length === 0"

<!-- 涔嬪悗 -->
{{ tools?.length || 0 }}
v-if="!tools || tools.length === 0"
```

---

## 鍚庣画寤鸿

1. **閿欒杈圭晫**: 鑰冭檻娣诲姞鍏ㄥ眬閿欒澶勭悊缁勪欢
2. **鍔犺浇鐘舵€?*: 涓哄紓姝ユ暟鎹坊鍔犳洿濂界殑鍔犺浇鐘舵€?
3. **绫诲瀷妫€鏌?*: 鑰冭檻娣诲姞 TypeScript 浠ヨ幏寰楁洿濂界殑绫诲瀷瀹夊叏

---

## 鎬荤粨

鉁?鎵€鏈夐棶棰樺凡淇
鉁?鏈嶅姟鍣ㄧǔ瀹氳繍琛屽湪绔彛 8767
鉁?鎵€鏈夐〉闈㈠彲姝ｅ父璁块棶
鉁?鏋勫缓鎴愬姛鏃犻敊璇?
鉁?CLI 娴嬭瘯閫氳繃

椤圭洰鐜板湪鍙互姝ｅ父浣跨敤浜嗭紒
