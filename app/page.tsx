"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const couponCode = "ZEROFALLGIFT2025";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <img 
              src="/premium-long-white.png" 
              alt="콴다 프리미엄"
              className="h-7 w-auto"
            />
            <span className="text-lg font-semibold text-gray-800">이용권 증정 이벤트</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Banner */}
      <div className="w-full mb-12">
        <img 
          src="/banner.jpg" 
          alt="배너 이미지"
          className="w-full h-auto"
        />
      </div>

      {/* 성적 상승률 섹션 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#FFF4F0' }}>
          <div className="text-center">
            <img 
              src="/premium-short-white.png" 
              alt="콴다 프리미엄"
              className="h-10 mx-auto mb-6"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">콴다 프리미엄 구독 이후</h3>
            <div className="mb-2">
              <span className="text-5xl font-black" style={{ color: '#FF5500' }}>성적 상승률 83%</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">[프리미엄 사용자 조사, 2023.11.]</p>
            
            {/* 쿠폰 디자인 */}
            <div className="relative mb-6 mx-auto max-w-md">
              <div className="flex rounded-2xl shadow-2xl overflow-visible bg-white">
                {/* 왼쪽 색상 영역 */}
                <div className="relative bg-gradient-to-b from-[#FF5500] to-[#FF8D01] text-white px-5 py-8 flex items-center justify-center min-w-[110px] rounded-l-2xl">
                  {/* 반원 컷아웃 효과 - mask 사용 */}
                  <div className="absolute inset-0 rounded-l-2xl" style={{
                    WebkitMaskImage: `radial-gradient(circle at -20px 50%, transparent 20px, black 20px)`,
                    maskImage: `radial-gradient(circle at -20px 50%, transparent 20px, black 20px)`,
                    backgroundColor: 'inherit'
                  }}></div>
                  
                  <div className="text-center relative z-10">
                    <p className="text-3xl font-black transform -rotate-12">무료</p>
                  </div>
                </div>
                
                {/* 오른쪽 메인 콘텐츠 */}
                <div className="flex-1 px-8 py-6 text-center">
                  <div className="mb-3">
                    <p className="text-2xl font-black text-red-500 line-through decoration-4">₩18,500</p>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">콴다 프리미엄 1개월 무료</h3>
                  <p className="text-gray-600">지금 무료로 프리미엄을 사용하고<br/>성적을 올려보세요.</p>
                </div>
              </div>
            </div>
            
            <div className="inline-block bg-red-500 text-white px-8 py-3 rounded-full">
              <p className="text-xl font-black">선착순 700명 한정</p>
            </div>
          </div>
        </div>
      </section>

      {/* 학습 도우미 섹션 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#F9F9F9' }}>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              학교, 학원 숙제할 때
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              시험 대비가 확실하게 필요할 때
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              학생에게 지금 가장 필요한 풀이 방법으로<br/>
              문제를 해결해 드려요.
            </p>
            
            {/* AI 튜터 라벨 */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2F63FF] to-[#FF5500] text-white font-semibold rounded-full text-sm">
                AI 튜터 & 동영상 풀이
              </span>
            </div>
            
            <div className="relative w-1/2 max-w-xs mx-auto mb-12">
              {/* 모바일 베젤 */}
              <div className="relative bg-gray-900 rounded-[2rem] p-1 shadow-2xl">
                {/* 노치 */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-10"></div>
                {/* 스크린 */}
                <div className="relative bg-black rounded-[1.75rem] overflow-hidden">
                  <video 
                    src="/premium1.mp4" 
                    className="w-full h-auto rounded-[1.75rem]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* AI 맞춤 첨삭 라벨 */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2F63FF] to-[#FF5500] text-white font-semibold rounded-full text-sm">
                AI 맞춤 첨삭 & 단계별 풀이
              </span>
            </div>
            
            <div className="relative w-1/2 max-w-xs mx-auto mb-12">
              {/* 모바일 베젤 */}
              <div className="relative bg-gray-900 rounded-[2rem] p-1 shadow-2xl">
                {/* 노치 */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-10"></div>
                {/* 스크린 */}
                <div className="relative bg-black rounded-[1.75rem] overflow-hidden">
                  <video 
                    src="/premium2.mp4" 
                    className="w-full h-auto rounded-[1.75rem]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* AI 퀴즈 라벨 */}
            <div className="mb-6 flex justify-center">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2F63FF] to-[#FF5500] text-white font-semibold rounded-full text-sm">
                AI 퀴즈 & 유사 문제
              </span>
            </div>
            
            <div className="relative w-1/2 max-w-xs mx-auto">
              {/* 모바일 베젤 */}
              <div className="relative bg-gray-900 rounded-[2rem] p-1 shadow-2xl">
                {/* 노치 */}
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-b-xl z-10"></div>
                {/* 스크린 */}
                <div className="relative bg-black rounded-[1.75rem] overflow-hidden">
                  <video 
                    src="/premium3.mp4" 
                    className="w-full h-auto rounded-[1.75rem]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ objectFit: 'cover' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프리미엄 혜택 섹션 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#F0F8FF' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              콴다 프리미엄을 구독한 친구들은<br/>
              이런 혜택을 누려요
            </h3>
            <img 
              src="/benefit.webp" 
              alt="프리미엄 혜택"
              className="w-full max-w-lg h-auto rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* 명문 학교 섹션 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              명문 학교에서도
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              콴다 프리미엄으로 공부해요
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              여러 학교에서 콴다 프리미엄을 활용하여 학생들이 겪는<br/>
              어려움을 쉽게 해결할 수 있도록 지원하고 있어요.
            </p>
            <img 
              src="/school.webp" 
              alt="명문 학교 로고"
              className="w-full max-w-2xl h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Coupon Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          
          {/* 쿠폰 코드 박스 - 항상 표시 */}
          <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#FFF4F0' }}>
            <div className="text-center">
              <img 
                src="/premium-short-white.png" 
                alt="콴다 프리미엄"
                className="h-10 mx-auto mb-3"
              />
              <p className="text-xl font-bold mb-6 text-gray-800">1개월 무료 이용권</p>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-200 mb-4">
                <span className="text-4xl md:text-5xl font-black" style={{ color: '#FF5500', letterSpacing: '0.1em' }}>
                  {couponCode}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="px-10 py-4 text-white text-lg font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #FF5500 0%, #FF8D01 100%)' }}
              >
                {copied ? "✓ 복사 완료!" : "쿠폰 코드 복사하기"}
              </button>
            </div>
          </div>


          {/* 참여 방법 */}
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-2xl mb-6 text-center" style={{ color: '#FF5500' }}>등록 방법</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ backgroundColor: '#FF5500' }}>
                  1
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">쿠폰 코드 복사</p>
                  <p className="text-sm text-gray-600">위 쿠폰 코드를 복사해주세요</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-[#FF5500] text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors flex-shrink-0"
                >
                  {copied ? "✓ 복사됨" : "코드 복사"}
                </button>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ backgroundColor: '#2F63FF' }}>
                  2
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">콴다 웹사이트에서 등록</p>
                  <p className="text-sm text-gray-600">로그인 후 &quot;프리미엄 쿠폰&quot;에서 코드 등록</p>
                </div>
                <a
                  href="https://account.qanda.ai/ko/login/qanda?next=https%3A%2F%2Fqanda.ai%2Fko%2Fsettings&entry_point=settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#2F63FF] text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex-shrink-0"
                >
                  바로가기
                </a>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <div className="text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 bg-black">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">앱 다운로드 & 로그인</p>
                  <p className="text-sm text-gray-600">로그인하면 프리미엄이 자동 활성화돼요!</p>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <a
                    href="https://apps.apple.com/app/qanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mathpresso.qanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Android
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* 안내사항 */}
          <div className="mt-8 p-4 rounded-xl border-2" style={{ backgroundColor: '#FFF5F0', borderColor: '#FF8D01' }}>
            <p className="text-sm mb-2" style={{ color: '#FF5500' }}>
              <strong>안내사항</strong>
            </p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• 본 캠페인은 중·고등학생 전용입니다.</li>
              <li>• 선착순 700명에게 콴다 프리미엄 1개월 무료 이용권을 제공합니다.</li>
              <li>• 쿠폰은 선착순 소진 시 조기 마감됩니다.</li>
              <li>• 앱 다운로드만 하면 프리미엄 기능 전부를 사용할 수 있어요.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}