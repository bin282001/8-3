import * as React from 'react';
import { useState, useEffect } from 'react';
import { Heart, Gift, Camera, PenLine, Pause, Play, Flower, Stars, Send, Mail } from 'lucide-react';
import myPhoto1 from "/src/data/anh1.png"; 
import myPhoto2 from "/src/data/anh2.png";
import myPhoto3 from "/src/data/anh3.png";

function SparkleEffect() {
  return (
    <div className="sparkle-container w-full h-full">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`sparkle sparkle-${i + 1}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingElement({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <div className="absolute floating-rose" style={style}>
      {children}
    </div>
  );
}

function Envelope({ onOpen, isOpen }: { onOpen: () => void; isOpen: boolean }) {
  return (
    <div 
      className={`envelope glass-card p-8 rounded-2xl shadow-xl relative cursor-pointer ${isOpen ? 'open' : ''}`}
      onClick={onOpen}
    >
      <div className="envelope-flap absolute top-0 left-0 w-full h-16 bg-pink-200 rounded-t-2xl transform-origin-top"></div>
      <div className="relative z-10 flex items-center justify-center">
        <Mail className={`text-pink-500 transition-all duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`} size={64} />
        <Heart className={`absolute text-red-500 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} size={48} />
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600 font-medium">{isOpen ? 'With Love ❤️' : 'Click để Mở'}</p>
      </div>
    </div>
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('letter');
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isLetterOpen) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLetterOpen]);

  const memories = [
    {
      image: myPhoto1,
      caption: "Kỷ niệm quen nhau 7 năm.",
      description: "Có những khoảnh khắc lúc vui, lúc buồn nhưng lúc nào cũng hạnh phúc."
    },
    {
      image: myPhoto2,
      caption: "Bảo Bối trông thật xinh đẹp.",
      description: "Pé lúc nào cũng xinh như hoa."
    },
    {
      image: myPhoto3,
      caption: "Du lịch cùng nhau",
      description: "Mong năm nay mọi chuyện đâu vào đó thì chúng ta có thể đi du lịch nhèo nhèo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingElement style={{ top: '5%', left: '5%' }}>
        <Flower className="text-pink-400" size={24} />
      </FloatingElement>
      <FloatingElement style={{ top: '20%', right: '10%' }}>
        <Stars className="text-yellow-400" size={20} />
      </FloatingElement>
      <FloatingElement style={{ bottom: '30%', left: '8%' }}>
        <Heart className="text-red-400" size={18} />
      </FloatingElement>
      <FloatingElement style={{ bottom: '15%', right: '12%' }}>
        <Flower className="text-pink-500" size={22} />
      </FloatingElement>

      {/* Header */}
      <div className="fixed top-0 w-full bg-white/60 backdrop-blur-md shadow-lg z-10">
        <nav className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => {
                setActiveSection('letter');
                setIsLetterOpen(false);
                setShowMessage(false);
              }}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full transition-all duration-300 hover-lift ${
                activeSection === 'letter'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg'
                  : 'hover:bg-pink-100 text-gray-700'
              }`}
            >
              <PenLine size={18} className="wave" />
              <span>Thư Tình</span>
            </button>
            <button
              onClick={() => setActiveSection('gallery')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full transition-all duration-300 hover-lift ${
                activeSection === 'gallery'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg'
                  : 'hover:bg-pink-100 text-gray-700'
              }`}
            >
              <Camera size={18} className="wave" />
              <span>Hình Ảnh</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {activeSection === 'letter' && (
            <div className="relative">
              <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold mb-4 text-gradient">
                  Chúc Mừng Ngày 8/3 nhé Bảo Bối! 💝
                </h1>
                <br />
                <p className="text-gray-600">Click để mở thư tình, hơi sến xíu nha !!!</p>
              </div>
              
              <div className="max-w-lg mx-auto">
                <Envelope onOpen={() => setIsLetterOpen(true)} isOpen={isLetterOpen} />
                
                <div className={`letter-content mt-8 ${showMessage ? 'visible' : ''}`}>
                  <div className="glass-card rounded-3xl shadow-xl p-8 relative">
                    <SparkleEffect />
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        To my dearest,
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                      Vào ngày đặc biệt này, anh muốn nói với em rằng em có ý nghĩa như thế nào đối với anh. Nụ cười của em làm bừng sáng những ngày đen tối nhất của anh, tình yêu của em cho anh sức mạnh và sự hiện diện của em làm cuộc sống của anh trở nên trọn vẹn. Em không chỉ là bạn gái của anh, mà còn là bạn thân nhất, là người bạn tâm giao và là chỗ dựa lớn nhất của anh.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                      Mỗi khoảnh khắc bên em đều quý giá, và anh trân trọng tất cả những kỷ niệm chúng ta đã cùng nhau tạo nên. Lòng tốt, trí thông minh và trái tim đẹp của em khiến anh ngày càng yêu em hơn.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                      Cảm ơn em vì đã là chính em, vì đã là người phụ nữ tuyệt vời như em. Anh hứa sẽ luôn ở bên em, để ủng hộ ước mơ của em, và yêu em bằng cả trái tim mình.
                      </p>
                      <div className="text-gray-700 mt-8 flex items-center justify-end space-x-2">
                        <p className="text-lg italic">Với tất cả tình yêu của anh,</p>
                        <Send className="text-pink-500 wave" size={18} />
                      </div>
                      <p className="text-gray-700 text-lg text-right">[Trọng Nam]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memories.map((memory, index) => (
                <div key={index} className="memory-card glass-card rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <img 
                      src={memory.image} 
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="memory-overlay absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-semibold mb-2">{memory.caption}</h3>
                        <p className="text-sm opacity-90">{memory.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full bg-white/60 backdrop-blur-md shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Gift className="text-pink-500 wave" size={22} />
            <span className="text-gray-700 font-medium">Dành tặng Bảo Bối.</span>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 text-white shadow-md hover-lift"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            <span>Click vào mấy đốm vàng trong chỗ nội dung thư nó nhảy lum la :)))))</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;