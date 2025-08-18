"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const couponCode = "ABCDE";

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
      <div className="w-full">
        <img 
          src="/banner.jpg" 
          alt="배너 이미지"
          className="w-full h-auto"
        />
      </div>

      {/* Main Title Section */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-2 bg-gradient-to-r from-[#2F63FF] to-[#FF5500] bg-clip-text text-transparent">
          선착순 700명에게
        </h1>
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#FF5500] to-[#FF8D01] bg-clip-text text-transparent">
          콴다 프리미엄 증정
        </h2>
      </section>

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
            <div className="mb-4">
              <span className="text-5xl font-black" style={{ color: '#FF5500' }}>성적 상승률 83%</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-2">콴다 프리미엄으로</p>
            <p className="text-lg font-medium text-gray-700 mb-8">자녀의 성적 향상을 확인해 보세요!</p>
            
            <img 
              src="/man.webp" 
              alt="학생 일러스트"
              className="w-48 h-auto mx-auto mb-4"
            />
            
            <p className="text-sm text-gray-500">[프리미엄 사용자 조사, 2023.11.]</p>
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
            <img 
              src="/benefit2.png" 
              alt="학습 도우미 기능"
              className="w-full h-auto mx-auto"
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
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4" style={{ color: '#FF5500' }}>참여 방법</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0" style={{ backgroundColor: '#FF8D01' }}>1</span>
                <span>콴다 계정이 있으면 로그인, 없으면 회원가입 후 [프리미엄 쿠폰 등록] 클릭</span>
              </li>
              <li className="flex items-start">
                <span className="text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0" style={{ backgroundColor: '#FF8D01' }}>2</span>
                <span>앱 설치 이후 → 사진 업로드 또는 질문 입력</span>
              </li>
              <li className="flex items-start">
                <span className="text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0" style={{ backgroundColor: '#FF8D01' }}>3</span>
                <span>프리미엄 기능 1개월간 무료 이용 가능</span>
              </li>
            </ol>
          </div>

          {/* 버튼 그룹 */}
          <div className="space-y-4">
            {/* 콴다 웹사이트 버튼 */}
            <div className="flex justify-center">
              <a
                href="https://account.qanda.ai/ko/login/qanda?next=https%3A%2F%2Fqanda.ai%2Fko%2Fsettings&entry_point=settings"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-white rounded-full transition-all transform hover:scale-105 font-medium shadow-lg text-center"
                style={{ backgroundColor: '#2F63FF', width: '100%', maxWidth: '400px' }}
              >
                프리미엄 쿠폰 등록하러 가기
              </a>
            </div>

            {/* 앱 스토어 버튼들 */}
            <div className="flex gap-3 justify-center">
              <a
                href="https://apps.apple.com/app/qanda" // 실제 iOS 앱 링크로 변경 필요
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 font-medium shadow-lg flex items-center justify-center text-sm"
                style={{ width: '193px' }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.mathpresso.qanda" // 실제 Android 앱 링크로 변경 필요
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all transform hover:scale-105 font-medium shadow-lg flex items-center justify-center text-sm"
                style={{ width: '193px' }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </a>
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