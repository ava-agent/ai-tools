// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.tencent.com/en-us/articles/2202235.html",
    "https://cloud.tencent.com/document/product/1804/123461",
    "https://github.com/Tencent-Hunyuan/Hunyuan3D-2",
    "https://huggingface.co/tencent/Hunyuan3D-2"
  ],
  "id": "hunyuan3d",
  "name": "混元3D",
  "category": "multimodal",
  "subcategory": "3D生成",
  "developer": "腾讯",
  "logo": null,
  "versions": [
    {
      "type": "CN/Open Source",
      "pricing": "消费端、腾讯云 API 和开源模型分开核算；腾讯云 API 首次开通可领 100 积分，预付 1,000 积分 100 元，后付 0.12 元/积分",
      "models": "Hunyuan 3D 3.0、Hunyuan3D 2.0、Hunyuan3D-2.1 Series",
      "link": "https://3d.hunyuan.tencent.com"
    }
  ],
  "freeQuota": "腾讯云 API 首次开通可手动领取一次性 100 积分免费包；消费端免费次数以站点/账号内为准；本地开源使用取决于许可和算力",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "腾讯将 Hunyuan 3D 3.0 定位为全球 3D 创作引擎，支持 text-to-3D、image-to-3D 和 Sketch-to-3D 输入",
    "腾讯云混元生3D API 文档列出一次性 100 积分免费包、1,000 积分 100 元、10,000 积分 980 元、后付费 0.12 元/积分",
    "腾讯云 API 扣减规则显示专业版 Normal 20 积分/次、LowPoly/Sketch 25、Geometry 15；极速版文/图生 3D 默认 15 积分/次",
    "开源 Hunyuan3D 2.0 与 Hunyuan3D-2.1 Series 提供消费站点之外的本地和研究路径",
    "消费端和开源/本地路线要按具体入口确认 OBJ 和 GLB 等导出格式",
    "GitHub model zoo 记录了 6GB、16GB 等不同显存选项",
    "当格式和质量要求匹配时，输出可进入 Unity、Unreal、Blender 等常见 3D 工作流"
  ],
  "cons": [
    "消费云端、腾讯云 API、GitHub 和 Hugging Face 路线的许可、成本和运维假设不同",
    "不能把消费端免费次数或 credits 直接套用到腾讯云 API 计费",
    "本地运行需要 GPU 显存和依赖管理，不只是开一个网页账号",
    "商用要按所选路线复核许可和生成资产权利",
    "模型质量仍需人工检查拓扑、纹理接缝、比例和动画准备度"
  ],
  "bestFor": "中文 3D 创作",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，混元 3D 应拆成三条路线看：Hunyuan 3D 3.0 消费/云端产品、腾讯云混元生3D API，以及开源 Hunyuan3D 2.0 / Hunyuan3D-2.1 Series 模型。腾讯云 API 现有一次性 100 积分免费包、预付积分包和 0.12 元/积分后付费，且不同生成类型会按 15/20/25/30/50 等积分扣减；这个区分比“国产 3D 工具”标签更影响成本、许可和部署判断。",
    "pitfalls": [
      "比较成本前先选定网页、腾讯云 API 或开源路线",
      "不要把消费端免费次数套用到腾讯云 API",
      "按具体模型或服务复核许可和输出权利",
      "本地部署前确认 6GB、16GB 等显存要求"
    ]
  },
  "decisionSummary": {
    "verdict": "严肃的国产 3D 生成选项，兼具消费端、API 和开源路线，但每条路线的成本、许可和算力含义不同。",
    "bestFor": "text-to-3D、image-to-3D、Sketch-to-3D、中文 3D 原型，以及同时需要网页和本地模型选项的团队",
    "avoidIf": "你需要单一简单 SaaS 计划、成熟企业资产治理，或不想做 GPU 规划的本地生成",
    "mainRisk": "Hunyuan 3D 3.0 消费站点、腾讯云 API 计费和 Hunyuan3D 2.0 / Hunyuan3D-2.1 Series 开源模型很容易混为一谈，从而造成许可、成本或硬件判断错误。",
    "alternatives": [
      "Meshy",
      "Tripo AI",
      "Blender plus manual art pipeline"
    ]
  },
  "swot": {
    "S": "输入模式多，并有开源路线",
    "W": "不同路线的许可和算力复杂度较高",
    "O": "中文 3D 创作和本地模型部署",
    "T": "Meshy、Tripo 和专业 DCC 管线竞争"
  },
  "tags": [
    "3D",
    "国产",
    "腾讯",
    "Hunyuan3D",
    "已核验"
  ]
}
