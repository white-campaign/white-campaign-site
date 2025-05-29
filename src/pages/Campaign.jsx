import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Target, Phone, Share2, ExternalLink, GraduationCap, Heart, Lightbulb, Shield, Globe, Leaf, Star, Plus, ArrowRight, Sparkles, Eye, EyeOff, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

export default function Campaign() {
  const [isVisible, setIsVisible] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const skipLinkRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    // Check for user motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Tab' && e.shiftKey === false) {
        // Focus management for better keyboard navigation
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      element.focus({ preventScroll: true });
    }
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'xlarge';
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      if (prev === 'xlarge') return 'large';
      if (prev === 'large') return 'normal';
      return 'normal';
    });
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const skipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: ${reducedMotion ? 'none' : 'float 6s ease-in-out infinite'};
        }
        
        .animate-pulse-glow {
          animation: ${reducedMotion ? 'none' : 'pulse-glow 2s ease-in-out infinite'};
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: ${reducedMotion ? 'none' : 'gradient-shift 8s ease infinite'};
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .card-hover {
          transition: ${reducedMotion ? 'none' : 'all 0.3s ease'};
        }
        
        .card-hover:hover {
          transform: ${reducedMotion ? 'none' : 'translateY(-10px) scale(1.02)'};
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        /* Font size classes */
        .font-normal { font-size: 1rem; }
        .font-large { font-size: 1.2rem; }
        .font-xlarge { font-size: 1.4rem; }
        
        /* High contrast mode */
        .high-contrast {
          filter: contrast(150%) brightness(1.2);
        }
        
        .high-contrast .glass-effect {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid #ffffff;
        }
        
        /* Focus styles */
        .focus-visible:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `}</style>

      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="skip-link focus-visible" 
        onClick={(e) => {
          e.preventDefault();
          skipToMain();
        }}
        aria-label="עבור לתוכן הראשי"
      >
        עבור לתוכן הראשי
      </a>

      {/* Accessibility Toolbar */}
      <div 
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border"
        role="toolbar"
        aria-label="כלי נגישות"
      >
        <h3 className="text-sm font-bold mb-2 text-gray-800">כלי נגישות</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={increaseFontSize}
              aria-label="הגדל טקסט"
              className="p-2"
            >
              <Plus className="w-4 h-4" />
              <span className="sr-only">הגדל טקסט</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={decreaseFontSize}
              aria-label="הקטן טקסט"
              className="p-2"
            >
              <Minus className="w-4 h-4" />
              <span className="sr-only">הקטן טקסט</span>
            </Button>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={toggleHighContrast}
            aria-label={highContrast ? "בטל ניגודיות גבוהה" : "הפעל ניגודיות גבוהה"}
            className="flex items-center gap-2"
          >
            {highContrast ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="text-xs">{highContrast ? 'ניגודיות רגילה' : 'ניגודיות גבוהה'}</span>
          </Button>
        </div>
      </div>

      <div 
        className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-${fontSize} ${highContrast ? 'high-contrast' : ''}`} 
        dir="rtl"
        lang="he"
      >
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full animate-float blur-lg" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Main Content */}
        <main id="main-content" tabIndex="-1">
          {/* Hero Section with Main Photo */}
          <section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-labelledby="hero-title"
            role="banner"
          >
            {/* Background with main team photo */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="relative w-full h-full">
                <img 
                  src="/images/team-photo.jpg" 
                  alt="רז בן חיים וערבה בנקין שדה, מועמדי הקמפיין הלבן לאגודת הסטודנטים באוניברסיטת רייכמן" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-600/90 via-indigo-700/80 to-purple-800/90 flex items-center justify-center"
                  style={{display: 'none'}}
                >
                  <div className="text-center text-white">
                    <div className="flex gap-8 mb-8 justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-float" aria-hidden="true">
                        <Users className="w-16 h-16" />
                      </div>
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}} aria-hidden="true">
                        <Star className="w-16 h-16" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold">תמונת הצוות תתווסף בקרוב</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70" aria-hidden="true"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Logo/Title with glow effect */}
              <header className="mb-8">
                <h1 
                  id="hero-title"
                  className="text-6xl md:text-8xl font-black text-white text-glow mb-4 leading-tight"
                >
                  הקמפיין הלבן
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6" role="img" aria-label="סלוגן הקמפיין">
                  <div className="h-1 w-20 bg-gradient-to-r from-transparent to-white rounded-full" aria-hidden="true"></div>
                  <Badge className="text-xl px-6 py-3 bg-white/20 text-white border-white/30 glass-effect animate-pulse-glow">
                    <Plus className="w-5 h-5 ml-2" aria-hidden="true" />
                    מעלים הילוך
                  </Badge>
                  <div className="h-1 w-20 bg-gradient-to-l from-transparent to-white rounded-full" aria-hidden="true"></div>
                </div>
                <p className="text-2xl md:text-3xl text-blue-100 font-medium">
                  אוניברסיטת רייכמן • אגודת הסטודנטים
                </p>
              </header>

              {/* Main Message */}
              <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-8 glass-effect" aria-labelledby="main-message">
                <h2 
                  id="main-message"
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  באנו לעבוד <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">בשבילכם</span>
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                  שלוש שנים שאנחנו חיים את השטח, את הקמפוס, מבפנים. 
                  אנחנו יודעים בדיוק איפה האגודה צריכה להשתפר.
                </p>
              </section>

              {/* Action Buttons */}
              <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center" aria-label="ניווט עיקרי">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:from-blue-50 hover:to-white text-xl px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse-glow focus-visible"
                  onClick={() => scrollToSection('platform')}
                  aria-describedby="platform-description"
                >
                  <Sparkles className="ml-3 h-6 w-6" aria-hidden="true" />
                  קראו את המצע המלא
                  <ArrowRight className="mr-3 h-6 w-6" aria-hidden="true" />
                </Button>
                <div id="platform-description" className="sr-only">עבור לקריאת המצע המפורט של הקמפיין</div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect text-white border-white/30 hover:bg-white/20 text-xl px-10 py-6 rounded-2xl transition-all duration-300 focus-visible"
                  onClick={() => scrollToSection('team')}
                  aria-describedby="team-description"
                >
                  הכירו את הצוות
                </Button>
                <div id="team-description" className="sr-only">עבור להכרת צוות הקמפיין</div>
              </nav>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
                <ChevronDown className="h-8 w-8 text-white/70" />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section 
            id="team" 
            className="py-20 bg-gradient-to-b from-white to-blue-50" 
            data-animate
            aria-labelledby="team-title"
            tabIndex="-1"
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                <header className="text-center mb-16">
                  <h2 
                    id="team-title"
                    className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
                  >
                    הצוות המוביל
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    מנהיגים עם ניסיון, חזון ותשוקה אמיתית לשינוי
                  </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                  {/* Raz */}
                  <article className="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl overflow-hidden">
                    <Card>
                      <CardHeader className="text-center p-8">
                        <div className="relative mb-6">
                          <div className="w-40 h-40 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse-glow" aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/raz-ben-haim.jpg" 
                                alt="תמונה של רז בן חיים, מועמד ליו״ר הקמפיין הלבן" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center" style={{display: 'none'}}>
                                <Users className="w-16 h-16 text-blue-600" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-3xl text-blue-800 mb-3">רז בן חיים</CardTitle>
                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg px-6 py-2 rounded-full">
                          יו״ר הקמפיין
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label="פרטי רז בן חיים">
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-blue-800">🎓 משפטים MBA שנה ג׳</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-blue-800">🏛️ מנהל מחלקת מועדונים</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-blue-800">🛡️ מנהל "סטודנטים בחזית"</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-blue-800">⚖️ תכנית רובינשטיין למנהיגות חוקתית</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </article>

                  {/* Araba */}
                  <article className="card-hover bg-gradient-to-br from-pink-50 to-purple-100 border-0 shadow-xl overflow-hidden">
                    <Card>
                      <CardHeader className="text-center p-8">
                        <div className="relative mb-6">
                          <div className="w-40 h-40 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full animate-pulse-glow" aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/araba-benkin-sade.jpg" 
                                alt="תמונה של ערבה בנקין שדה, מועמדת לסגנית יו״ר הקמפיין הלבן" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center" style={{display: 'none'}}>
                                <Star className="w-16 h-16 text-pink-600" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-3xl text-pink-800 mb-3">ערבה בנקין שדה</CardTitle>
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg px-6 py-2 rounded-full">
                          סגנית יו״ר
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label="פרטי ערבה בנקין שדה">
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-pink-800">📺 תקשורת שנה ג׳</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-pink-800">🎯 רכזת בית הספר סמי עופר לתקשורת</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-pink-800">📱 ראש מחלקת שיווק וסושיאל</p>
                          </div>
                          <div className="bg-white/70 p-4 rounded-xl" role="listitem">
                            <p className="font-semibold text-pink-800">🌟 תכנית רבין למנהיגות</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </div>

                {/* Team Quote */}
                <aside className="mt-16 text-center">
                  <blockquote className="bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                    <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed">
                      "אנחנו כאן כדי לעבוד עבורכם ולהפוך את חוויית הלימודים שלכם לטובה יותר"
                    </p>
                  </blockquote>
                </aside>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section 
            id="vision" 
            className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100" 
            data-animate
            aria-labelledby="vision-title"
            tabIndex="-1"
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                <header className="text-center mb-16">
                  <h2 
                    id="vision-title"
                    className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
                  >
                    החזון שלנו
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                </header>

                <div className="bg-white/60 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/30">
                  <p className="text-2xl leading-relaxed text-center mb-12 text-gray-800">
                    אגודת הסטודנטים היא הקול של הסטודנטים. היא הבית של הסטודנטים, היא זו שאמורה להילחם בשבילכם, 
                    לייצג אתכם, לוודא שהרצונות והדרישות שלכם לא רק נשמעים אלא גם מקבלים מענה.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="עקרונות החזון">
                    <div className="text-center group" role="listitem">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2" aria-hidden="true">
                        <span className="text-3xl text-white font-bold">✓</span>
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">כל מה שעובד</h3>
                      <p className="text-green-700 font-semibold">באנו לשפר</p>
                    </div>
                    
                    <div className="text-center group" role="listitem">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2" aria-hidden="true">
                        <span className="text-3xl text-white font-bold">✗</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-800 mb-2">כל מה שלא עבד</h3>
                      <p className="text-red-700 font-semibold">באנו לשנות</p>
                    </div>
                    
                    <div className="text-center group" role="listitem">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2" aria-hidden="true">
                        <span className="text-3xl text-white font-bold">↗</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">תמורה אמיתית</h3>
                      <p className="text-blue-700 font-semibold">לכסף שלכם</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Section */}
          <section 
            id="platform" 
            className="py-20 bg-gradient-to-b from-white to-slate-50" 
            data-animate
            aria-labelledby="platform-title"
            tabIndex="-1"
          >
            <div className="container mx-auto px-4">
              <div className={`transition-all duration-1000 ${isVisible.platform ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                <header className="text-center mb-16">
                  <h2 
                    id="platform-title"
                    className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4"
                  >
                    המצע שלנו
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-slate-600 to-slate-800 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    תוכנית מפורטת ומעשית לשינוי אמיתי בחיי הקמפוס
                  </p>
                </header>

                <div className="space-y-8 max-w-6xl mx-auto">
                  {/* Reserve Support */}
                  <article className="card-hover overflow-hidden border-0 shadow-xl">
                    <Card>
                      <CardHeader className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 animate-gradient text-white p-8">
                        <CardTitle className="flex items-center gap-4 text-2xl">
                          <div className="p-3 bg-white/20 rounded-full" aria-hidden="true">
                            <Shield className="w-8 h-8" />
                          </div>
                          תמיכה במילואימניקים
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                          המילואים לא נגמרים בשטח – האגודה תהיה הבית של משרתי המילואים לאורך כל התואר.
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
                          <h4 className="font-bold text-green-800 mb-3 text-lg">מה נעשה:</h4>
                          <ul className="space-y-2 text-green-700" role="list">
                            <li className="flex items-center gap-3" role="listitem">
                              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                              סיכומים מסטודנטים ועדכונים מהמרצים
                            </li>
                            <li className="flex items-center gap-3" role="listitem">
                              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                              ליווי אישי של חברי המסלול
                            </li>
                            <li className="flex items-center gap-3" role="listitem">
                              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                              חיבור לטיפול ועיבוד פסיכולוגי
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </article>

                  {/* Fun and Atmosphere */}
                  <article className="card-hover overflow-hidden border-0 shadow-xl">
                    <Card>
                      <CardHeader className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 animate-gradient text-white p-8">
                        <CardTitle className="flex items-center gap-4 text-2xl">
                          <div className="p-3 bg-white/20 rounded-full" aria-hidden="true">
                            <Heart className="w-8 h-8" />
                          </div>
                          פאן ואווירה בקמפוס
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8">
                        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                          הסטודנטים ברייכמן לא צריכים סיבה למסיבה – פשוט מגיע לנו ליהנות.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-purple-800 mb-4 text-lg flex items-center gap-2">
                              <Sparkles className="w-5 h-5" aria-hidden="true" />
                              מה נעשה:
                            </h4>
                            <ul className="space-y-2 text-purple-700" role="list">
                              <li role="listitem">🎵 הופעות ואירועים מגבשים</li>
                              <li role="listitem">🎪 פסטיבלים וירידים</li>
                              <li role="listitem">🚗 הקרנות דרייב-אין</li>
                              <li role="listitem">🍕 פסטיבלי אוכל</li>
                            </ul>
                          </div>
                          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl">
                            <h4 className="font-bold text-pink-800 mb-4 text-lg flex items-center gap-2">
                              <Target className="w-5 h-5" aria-hidden="true" />
                              הבטחות:
                            </h4>
                            <ul className="space-y-2 text-pink-700" role="list">
                              <li role="listitem">⚖️ יחס הוגן במכירת כרטיסים</li>
                              <li role="listitem">🌍 אירועים לכל הקהלים</li>
                              <li role="listitem">⏰ ללא תורים ולחצים</li>
                              <li role="listitem">🎆 אירועי שיא לאורך השנה</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section 
            className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 animate-gradient relative overflow-hidden"
            aria-labelledby="cta-title"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 
                  id="cta-title"
                  className="text-4xl md:text-6xl font-bold text-white mb-8 text-glow"
                >
                  פשוט <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">מעלים הילוך</span>
                </h2>
                
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-8 glass-effect">
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6">
                    אנחנו לא מבטיחים הבטחות ריקות ולא מדברים בסיסמאות. 
                    אנחנו מגיעים עם ניסיון, עם תוכנית עבודה מגובשת והכי חשוב עם רצון אמיתי לשפר את מה שצריך.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-6 rounded-2xl mb-6">
                    <p className="text-xl text-white font-semibold">
                      זה הזמן וההזדמנות שלכם להשפיע, לבחור באנשים שמכירים את המערכת מבפנים
                    </p>
                  </div>
                  
                  <div className="bg-white/20 p-8 rounded-2xl border border-white/30">
                    <p className="text-3xl md:text-4xl font-black text-white animate-pulse-glow">
                      ניפגש בקלפי, ליד הפתק של הקמפיין הלבן!
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-orange-900 hover:from-yellow-300 hover:to-orange-400 text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 font-bold focus-visible"
                  aria-label="קריאה לפעולה - בואו נעלה הילוך יחד"
                >
                  <Plus className="ml-3 h-6 w-6" aria-hidden="true" />
                  בואו נעלה הילוך יחד!
                  <ArrowRight className="mr-3 h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-12"
          role="contentinfo"
          aria-label="מידע על הקמפיין"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                הקמפיין הלבן
              </h3>
              <div className="flex items-center justify-center gap-4 mb-6" aria-hidden="true">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-500"></div>
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2">
                  <Plus className="w-4 h-4 ml-1" />
                  מעלים הילוך
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-500"></div>
              </div>
              <p className="text-gray-400 mb-4 text-lg">אוניברסיטת רייכמן • אגודת הסטודנטים</p>
              <p className="text-gray-500 max-w-2xl mx-auto">
                באנו לעבוד עבורכם בשקיפות מלאה ולמען מי שבאמת חשוב – אתם.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 