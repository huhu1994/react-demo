// 生成站点配图 URL（SDXL 提示词 + 尺寸）
export const img = (prompt, size) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;
