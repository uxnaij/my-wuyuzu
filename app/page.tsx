"use client";

import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  tag: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "頂級野生厚切烏魚子禮盒",
    weight: "8兩裝（約300g）／精美燙金木盒",
    price: 2680,
    tag: "送禮首選",
    description: "嚴選冬至前後野生捕獲烏魚，色澤如琥珀般透亮，油脂豐厚、口感綿密不黏牙。",
  },
  {
    id: 2,
    name: "職人日曬古法烏魚子",
    weight: "6兩裝（約225g）／真空保鮮裝",
    price: 1880,
    tag: "經典熱銷",
    description: "遵循七道古法工序，海風自然日曬陰乾，低鹽配方保留最純粹的海洋鮮甜。",
  },
  {
    id: 3,
    name: "炭烤一口吃烏魚子隨手包",
    weight: "150g（約18-20片）／獨立真空小包裝",
    price: 680,
    tag: "免料理即食",
    description: "高粱酒微炙炭烤，拆袋即食。追劇、下酒、辦公室下午茶的最佳奢華零嘴。",
  },
];

export default function WuyuzuStore() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const addToCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const totalPrice = PRODUCTS.reduce(
    (sum, product) => sum + (cart[product.id] || 0) * product.price,
    0
  );

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setCart({});
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* 頂部導覽列 */}
      <header className="sticky top-0 z-50 bg-stone-900/95 text-amber-50 backdrop-blur border-b border-amber-900/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-widest text-amber-400">
              WUYUZU 烏魚子
            </span>
            <span className="hidden sm:inline-block text-xs text-amber-200/70 border border-amber-500/40 px-2 py-0.5 rounded">
              古法日曬・海味臻品
            </span>
          </div>

          <nav className="flex items-center space-x-6 text-sm">
            <a href="#products" className="hover:text-amber-400 transition">
              嚴選商品
            </a>
            <a href="#craft" className="hover:text-amber-400 transition">
              職人堅持
            </a>
            <a
              href="#order"
              className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-full font-medium transition flex items-center gap-2"
            >
              <span>立即訂購</span>
              {totalItems > 0 && (
                <span className="bg-stone-900 text-amber-400 text-xs font-bold px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </a>
          </nav>
        </div>
      </header>

      {/* 主視覺橫幅 (Hero Section) */}
      <section className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-amber-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-amber-400 tracking-[0.25em] text-sm font-semibold uppercase">
            TAIWAN PREMIUM MULLET ROE
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            陽光與海風淬鍊的
            <span className="block text-amber-400 mt-2">琥珀級頂級烏魚子</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            堅持每日清晨手工鹽漬、重壓整形與天然日光曝曬。每一片都呈現透亮橘紅光澤，入口綿密回甘，是年節贈禮與老饕私藏的不二之選。
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-lg shadow-lg transition"
            >
              選購限量烏魚子
            </a>
            <a
              href="#craft"
              className="border border-amber-400/50 hover:bg-amber-400/10 text-amber-200 font-medium px-8 py-3.5 rounded-lg transition"
            >
              了解製作工藝
            </a>
          </div>
        </div>
      </section>

      {/* 商品展示區 */}
      <section id="products" className="max-w-6xl mx-auto py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-stone-900">招牌嚴選系列</h2>
          <p className="text-stone-500 mt-2">真空獨立包裝・全程低溫冷凍新鮮宅配</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                {/* 商品示意圖區塊 */}
                <div className="h-52 bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 relative flex items-center justify-center p-6">
                  <span className="absolute top-4 left-4 bg-stone-900/85 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <div className="w-36 h-20 rounded-full bg-amber-950/20 border-2 border-amber-200/60 flex items-center justify-center text-white font-bold tracking-widest shadow-inner">
                    琥珀烏金
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                  <p className="text-xs font-medium text-amber-700 bg-amber-50 inline-block px-2.5 py-1 rounded">
                    {item.weight}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400 block">優惠售價</span>
                  <span className="text-2xl font-extrabold text-amber-700">
                    NT$ {item.price.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(item.id)}
                  className="bg-stone-900 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition cursor-pointer"
                >
                  + 加入預購單
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 職人堅持特色區 */}
      <section id="craft" className="bg-amber-950 text-amber-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-amber-800/60 rounded-xl">
            <div className="text-3xl mb-3">☀️</div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">100% 天然日曬風乾</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              拒絕機器快速烘乾，順應冬季海風與暖陽自然熟成，鎖住濃郁卵香與彈性口感。
            </p>
          </div>
          <div className="p-6 border border-amber-800/60 rounded-xl">
            <div className="text-3xl mb-3">🧂</div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">薄鹽低鈉健康配方</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              精準控制海鹽比例，不死鹹、不腥苦，切片搭配蘋果或水梨更能襯托甘甜尾韻。
            </p>
          </div>
          <div className="p-6 border border-amber-800/60 rounded-xl">
            <div className="text-3xl mb-3">❄️</div>
            <h3 className="text-lg font-bold text-amber-300 mb-2">檢驗合格・冷鏈直送</h3>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              無防腐劑與人工色素，每批皆通過食品安全檢驗，真空包裝後黑貓低溫宅配到府。
            </p>
          </div>
        </div>
      </section>

      {/* 快速訂購表單區 */}
      <section id="order" className="max-w-3xl mx-auto py-20 px-6">
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 text-center">線上快速預購單</h2>
          <p className="text-stone-500 text-sm text-center mt-1 mb-8">
            填寫下方資料送出後，專人將於 24 小時內與您聯繫確認出貨細節
          </p>

          {/* 已選商品摘要 */}
          <div className="bg-stone-50 p-4 rounded-xl mb-6 border border-stone-200">
            <div className="flex justify-between items-center text-sm font-bold text-stone-700">
              <span>目前選購數量：{totalItems} 件</span>
              <span className="text-lg text-amber-700">
                預估總金額：NT$ {totalPrice.toLocaleString()}
              </span>
            </div>
            {totalItems === 0 && (
              <p className="text-xs text-stone-400 mt-1">
                （提示：請先點擊上方商品卡片的「+ 加入預購單」選擇品項）
              </p>
            )}
          </div>

          {orderSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
              <p className="text-lg font-bold">感謝您的訂購！我們已收到您的預購資訊。</p>
              <p className="text-sm">客服專員將盡快透過電話或 LINE 與您確認配送時間。</p>
              <button
                onClick={() => setOrderSubmitted(false)}
                className="mt-4 text-xs underline text-emerald-700 cursor-pointer"
              >
                繼續選購其他商品
              </button>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    收件人姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例如：王小明"
                    className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    聯絡電話 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="例如：0912-345-678"
                    className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    宅配收件地址 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例如：台北市中山區南京東路二段 123 號"
                    className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    訂單備註（選填）
                  </label>
                  <textarea
                    rows={4}
                    placeholder="例如：希望用禮盒包裝、請在周末前聯絡我。"
                    className="w-full border border-stone-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-lg transition cursor-pointer"
                >
                  確認送出預購訂單
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 頁尾資訊 */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-lg font-semibold text-amber-300">WUYUZU 烏魚子職人手作坊</p>
          <p className="mt-2 text-sm">客服專線：0800-000-000 ｜ 官方 LINE：@wuyuzu</p>
          <p className="mt-3 text-xs text-stone-400">
            © {currentYear} WUYUZU. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
