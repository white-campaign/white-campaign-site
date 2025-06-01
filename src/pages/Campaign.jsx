import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Target, Phone, Share2, ExternalLink, GraduationCap, Heart, Lightbulb, Shield, Globe, Leaf, Star, Plus, ArrowRight, Sparkles, Eye, EyeOff, Minus, Languages, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

// Language content
const content = {
  he: {
    dir: 'rtl',
    lang: 'he',
    title: 'הקמפיין הלבן',
    slogan: 'מעלים הילוך',
    university: 'אוניברסיטת רייכמן • אגודת הסטודנטים',
    heroTitle: 'באנו לעבוד',
    heroSubtitle: 'שלוש שנים שאנחנו חיים את השטח, את הקמפוס, מבפנים, אבל ממש מבפנים: מהלימודים, למסיבות, ועד למילואים, מהכיתות ועד למועדונים.',
    readPlatform: 'קראו את המצע המלא',
    meetTeam: 'הכירו את הצוות',
    teamTitle: 'הצוות המוביל',
    teamSubtitle: 'מנהיגים עם ניסיון, חזון ותשוקה אמיתית לשינוי',
    chairman: 'יו״ר',
    viceChairman: 'ס. יו״ר',
    razDetails: {
      title: 'רז בן חיים',
      details: [
        'סטודנט למשפטים MBA שנה ג׳',
        'מנהל מחלקת מועדונים',
        'מנהל "סטודנטים בחזית"',
        'תכנית רובינשטיין למנהיגות חוקתית'
      ]
    },
    arabaDetails: {
      title: 'ערבה בנקין שדה',
      details: [
        'סטודנטית לתקשורת שנה ג׳',
        'רכזת בית הספר סמי עופר לתקשורת',
        'ראש מחלקת שיווק וסושיאל',
        'תכנית רבין למנהיגות'
      ]
    },
    teamQuote: '"קראנו כל פנייה, כל תלונה, יזמנו קהילות מילואים, נטוורקינג, היינו שם – במסדרונות, בשיחות הספונטניות, בתור לקרנף, בחיפוש אחרי פינה שקטה ללמוד בה באקווריום"',
    visionTitle: 'החזון שלנו',
    visionText: 'אגודת הסטודנטים היא הקול של הסטודנטים. היא הבית של הסטודנטים, היא זו שאמורה להילחם בשבילכם, לייצג אתכם, לוודא שהרצונות והדרישות שלכם לא רק נשמעים אלא גם מקבלים מענה אם ברמה האקדמאית, או ברמה היומיומית קמפוס.',
    visionPoints: [
      { title: 'כל מה שעובד', subtitle: 'באנו לשפר' },
      { title: 'כל מה שלא עבד', subtitle: 'באנו לשנות' },
      { title: 'תמורה אמיתית', subtitle: 'לכסף שלכם' }
    ],
    platformTitle: 'המצע שלנו',
    platformSubtitle: 'תוכנית מפורטת ומעשית לשינוי אמיתי בחיי הקמפוס',
    
    // Platform sections
    sections: [
      {
        id: 'reservists',
        title: 'מעלים הילוך בתמיכה במילואימניקים',
        subtitle: 'המילואים לא נגמרים בשטח – האגודה תהיה הבית של משרתי המילואים לאורך כל התואר.',
        content: 'רז מכהן כמנהל בארגון "סטודנטים בחזית" שהוקם בתחילת המלחמה ולקח חלק בגיבוש מתווה המילואימניקים הראשון שנכתב, וברמה הארצית. במקביל – יזם והקים את קבוצת "המילואימניקים של רייכמן", ריכז מאות פניות מסטודנטים המשרתים בכלל החזיתות, ונפגש עם נשיא האוניברסיטה לשיקוף הצרכים האמיתיים שעלו מהשטח.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'סיכומים מסטודנטים ועדכונים מהמרצים ויחס אישי מהם',
          'ליווי אישי של חברי המסלול וסיוע אקדמי',
          'חיבור לטיפול ועיבוד פסיכולוגי',
          'קשר ישיר ונגיש מול הדיקנים'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'fun',
        title: 'מעלים הילוך בפאן ואווירה בקמפוס',
        subtitle: 'הסטודנטים ברייכמן לא צריכים סיבה למסיבה – פשוט מגיע לנו ליהנות.',
        content: 'נחזיר את האווירה האגדית של "הבינתחומי" עם מסיבות שיזכירו לכם למה אתם פה (וזה לא רק בשביל התואר...). הופעות, אירועים, פעילויות מגבשות, ירידים ופסטיבלים שיחברו את הסטודנטים לקהילה המדהימה והמגוונת.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'הופעות ואירועים מגבשים',
          'פסטיבלים וירידים',
          'הקרנות סרט דרייב-אין',
          'פסטיבלי אוכל',
          'אירועי שיא לאורך כל שנת הלימודים',
          'יחס הוגן בין היצע לביקוש במכירות הכרטיסים',
          'אירועים לכל הקהלים: ישראלים, בינלאומיים',
          'ללא תורים ולחצים',
          'נגישות וזמינות לכל הסטודנטים'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'networking',
        title: 'מעלים הילוך בנטוורקינג וקהילת רייכמן',
        subtitle: 'הנטוורקינג הוא אחד המשאבים הייחודיים לאוניברסיטת רייכמן!',
        content: 'המטרה שלנו היא ליצור קהילה חזקה ומגובשת, שדואגת לסטודנטים של היום וגם לבוגריה. נפעל לחיבור בין סטודנטים שונים בקמפוס, מבתי ספר שונים ומשנים שונות.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'קבוצות חשיבה ומפגשי אירוח בין בתי ספר',
          'שיתופי פעולה וחיבורים בין הסטודנטים',
          'תחושת שייכות וחברים מכל החוגים',
          'הפיכה לקמפוס הכי מאוחד והכי חזק בארץ'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'rights',
        title: 'מעלים הילוך בזכויות הסטודנטים',
        subtitle: 'עבודות מתעכבות? זכויות מופרות? יש לכם כתובת אחת ברורה.',
        content: 'ערבה בעלת ניסיון של שלוש שנים כנציגה ושנה כרכזת אקדמית – היא מכירה את המערכת, את הפתרונות, ואת הדרך לעשות סדר. אנחנו כאן כדי לוודא שהזכויות שלכם מכובדות ושאתם מקבלים את מה שמגיע לכם.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'חיזוק נציגי ורכזי המסלול',
          'בניית פורום אקדמי אפקטיבי',
          'מענה מהיר ומדויק לכל פנייה',
          'טיפול בעיכובים ובחינת חריגות'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'smart-campus',
        title: 'מעלים הילוך בקמפוס חכם ונגיש',
        subtitle: 'נגמרו החיפושים אחרי כיתה פנויה!',
        content: 'נשיק מערכת חכמה שתשקף בזמן אמת כיתות פנויות ומרחבי למידה זמינים – לאורך כל השנה, ובמיוחד בתקופות מבחנים.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'מערכת חכמה לכיתות פנויות בזמן אמת',
          'אפשרות להזמין כיתות מראש',
          'מאגר לימודי מקיף עם סיכומים מכל בתי הספר',
          'הכל במקום אחד, נוח ונגיש'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'international',
        title: 'מעלים הילוך בבית הספר הבינלאומי',
        subtitle: 'בית הספר הבינלאומי צריך להיות מעורב ברווחה ובאווירה, בקהילה וברוח המקום.',
        content: 'נגדיר תפקיד מיוחד לנציג מבית הספר הבינלאומי בהנהלת האגודה, שמטרתו תהיה לשקף את הצרכים הסטודנטיאליים.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'ייצוג מיוחד בהנהלת האגודה',
          'שיקוף צרכים סטודנטיאליים בזמן אמת',
          'התאמת אירועים לכל הקהלים',
          'טיפול בבעיות ודרישות בזמן אמת'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'wellness',
        title: 'מעלים הילוך ברווחה בקמפוס',
        subtitle: 'הקמפוס הוא הבית שלנו – ואנחנו כאן כדי להפוך אותו לטוב יותר.',
        content: 'נחזיר את מה שעבד, נחזק את מה שצריך, ונשדרג את מה שאפשר – מהכיתות והספריות, דרך הספורט והפנאי, ועד למעונות וחיי היומיום. וכן, גם הקרנף יקבל סוף סוף מענה.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'שיפור הכיתות והספריות',
          'שדרוג הספורט והפנאי',
          'שיפור המעונות וחיי היומיום',
          'פתרון לבעיית הקרנף'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'entrepreneurship',
        title: 'מעלים הילוך ביזמות ותמיכה בסטודנטים עצמאיים',
        subtitle: 'יש לא מעט סטודנטים שלא רק לומדים – אלא גם בונים, יוצרים ומובילים.',
        content: 'נרצה לראות אותם מקבלים יותר מקום, יותר חיבורים ויותר הזדמנויות. נוציא קולות קוראים לקהילת העצמאיים בקמפוס לספק את השירותים שהאגודה צורכת.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'קולות קוראים לקהילת העצמאיים',
          'חיזוק המעטפת ליזמים ועצמאיים',
          'אירועי במה פתוחה להשראה',
          'חשיפה לשיתופי פעולה בין בתי ספר'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'career',
        title: 'מעלים הילוך בהנגשת היום שאחרי',
        subtitle: 'התואר הוא בסיס חשוב – אבל אנחנו יודעים שזה לא נגמר שם.',
        content: 'נרחיב את שיתופי הפעולה עם בוגרים, ארגונים ומוסדות שילוו אתכם גם מעבר ללימודים. נייצר מסלולים, חיבורים ותכנים שיכינו אתכם טוב יותר לקריירה.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'הרחבת שיתופי פעולה עם בוגרים',
          'חיבורים לארגונים ומוסדות',
          'הכנה לקריירה ולעשייה',
          'אפשרויות התנסות מעשית בתעשייה'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'gender',
        title: 'מעלים הילוך בייצוג נשי',
        subtitle: 'נפעל לחיזוק הייצוג הנשי בכל דרגי האגודה.',
        content: 'נקדם מדיניות של איזון מגדרי בכל הוועדות ובפרויקטים של האגודה, ונתייחס ברצינות לצרכים הייחודיים של הסטודנטיות בקמפוס.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'חיזוק ייצוג נשי בהנהגת האגודה',
          'איזון מגדרי בוועדות ופרויקטים',
          'התייחסות לצרכים ייחודיים של סטודנטיות',
          'עידוד מנהיגות נשית בקמפוס'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'academic-staff',
        title: 'מעלים הילוך בעבודה עם הסגל האקדמי',
        subtitle: 'הסדרת שגרות עבודה סדירות מול הנהלת האוניברסיטה ודיקני בתי הספר.',
        content: 'קיום שיח שוטף ומקצועי של האגודה מול ההנהלה ופלטפורמה לקידום האינטרסים שלכם, כך שנוודא שהצרכים המשתנים מקבלים מענה מדויק ואיכותי.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'קיום שיח שוטף עם ההנהלה',
          'פלטפורמה לקידום אינטרסי הסטודנטים',
          'מענה מדויק לצרכים משתנים',
          'אירועי הערכה למרצים נבחרים'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'budget',
        title: 'מעלים הילוך בניהול התקציב ושקיפות',
        subtitle: 'תקציב האגודה הוא של הסטודנטים – והוא צריך לעבוד בשבילם.',
        content: 'נבחן מחדש לאן הולך הכסף שלכם, ונשנה את סדרי העדיפויות. נשים דגש על מה שבאמת חשוב לכם ויעשה לכם שינוי בשטח.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'בחינה מחדש של הוצאות התקציב',
          'שינוי סדרי עדיפויות',
          'דגש על מה שחשוב לסטודנטים',
          'שקיפות גבוהה בניהול כלכלי'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'values',
        title: 'מעלים הילוך בערכים ומורשת אוניברסיטת רייכמן',
        subtitle: 'קמפוס שבנוי על ערכים, על מוסר, על ישראליות וציונות.',
        content: 'נקים אירועים בשיתוף מטה החטופים, צעדות ואירועים לזכר הנופלים והשבויים, ניזום הרצאות של פרופ׳ אוריאל רייכמן לספר את סיפור המקום.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'אירועים בשיתוף מטה החטופים',
          'צעדות ואירועי זיכרון',
          'הרצאות של פרופ׳ אוריאל רייכמן',
          'חיזוק הערכים והאידיאולוגיה'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'minorities',
        title: 'מעלים הילוך בייצוג מיעוטים',
        subtitle: 'נקדם את קולם ואת דרישותיהם של המיעוטים בקמפוס.',
        content: 'בחגים, מועדים, תאריכים חשובים, צרכים ובקשות. בקמפוס שלנו יש מקום לצרכים של כולם!',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'קידום קול המיעוטים',
          'התייחסות לחגים ומועדים שונים',
          'מענה לצרכים ייחודיים',
          'יצירת מקום לכל הקהלים'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'environment',
        title: 'מעלים הילוך בשמירה על סביבה ירוקה',
        subtitle: 'נפעל להפוך את האגודה והקמפוס לירוקים יותר ונגישים יותר.',
        content: 'נקדם יוזמות מחזור והפחתת שימוש בכלים חד-פעמיים בכלל אירועי האגודה, נקיים פעילויות ירוקות לאורך השנה.',
        actions: 'איך נדאג לכן ולכם:',
        items: [
          'יוזמות מחזור בכל האירועים',
          'הפחתת שימוש בכלים חד-פעמיים',
          'פעילויות ירוקות לאורך השנה',
          'עידוד מודעות סביבתית'
        ],
        color: 'from-blue-700 to-blue-800'
      }
    ],

    ctaTitle: 'מעלים הילוך',
    ctaText: 'אנחנו לא מבטיחים הבטחות ריקות ולא מדברים בסיסמאות. אנחנו מגיעים עם ניסיון, עם תוכנית עבודה מגובשת והכי חשוב עם רצון אמיתי לשפר את מה שצריך.',
    ctaHighlight: 'זה הזמן וההזדמנות שלכם להשפיע, לבחור באנשים שמכירים את המערכת מבפנים',
    ctaFinal: 'ניפגש בקלפי, ליד הפתק של הקמפיין הלבן!',
    ctaButton: 'בואו נעלה הילוך יחד!',
    instagramButton: 'עקבו אחרינו באינסטגרם',
    instagramHandle: '@thewhitecampaign',
    footerText: 'באנו לעבוד עבורכם בשקיפות מלאה ולמען מי שבאמת חשוב – אתם.',
    accessibility: {
      title: 'כלי נגישות',
      increaseFont: 'הגדל טקסט',
      decreaseFont: 'הקטן טקסט',
      highContrast: 'ניגודיות גבוהה',
      normalContrast: 'ניגודיות רגילה',
      skipToMain: 'עבור לתוכן הראשי'
    }
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    title: 'The White Campaign',
    slogan: 'Leveling Up',
    university: 'Reichman University • Student Union',
    heroTitle: 'We Came to Work',
    heroSubtitle: 'Three years we\'ve been living the field, the campus, from the inside, really from the inside: from studies to parties, from reserves to classrooms and clubs.',
    readPlatform: 'Read Our Full Platform',
    meetTeam: 'Meet the Team',
    teamTitle: 'The Leading Team',
    teamSubtitle: 'Leaders with experience, vision and genuine passion for change',
    chairman: 'Raz Ben Haim',
    viceChairman: 'Araba Benkin Sade',
    razDetails: {
      title: 'Chairman',
      details: [
        'Law Students MBA 3rd Year',
        'Clubs Department Manager',
        '"Students at the Front" Manager',
        'Rubinstein Constitutional Leadership Program'
      ]
    },
    arabaDetails: {
      title: 'Vice Chairman',
      details: [
        'Communications 3rd Year',
        'Sami Ofer School of Communications Coordinator',
        'Head of Marketing & Social Media',
        'Rabin Leadership Program'
      ]
    },
    teamQuote: '"We read every inquiry, every complaint, initiated reserves communities, networking, we were there – in the hallways, in spontaneous conversations, in line at the cafeteria, searching for a quiet corner to study in the aquarium"',
    visionTitle: 'Our Vision',
    visionText: 'The Student Union is the voice of the students. It is the students\' home, the one that should fight for you, represent you, ensure that your wishes and demands are not only heard but also addressed at the academic level or daily campus level.',
    visionPoints: [
      { title: 'Everything That Works', subtitle: 'We Came to Improve' },
      { title: 'Everything That Didn\'t Work', subtitle: 'We Came to Change' },
      { title: 'Real Value', subtitle: 'For Your Money' }
    ],
    platformTitle: 'Our Platform',
    platformSubtitle: 'A detailed and practical plan for real change in campus life',
    
    sections: [
      {
        id: 'reservists',
        title: 'Leveling Up Support for Reservists',
        subtitle: 'Military service doesn\'t end in the field – the union will be the home of reservists throughout their degree.',
        content: 'Raz serves as manager at "Students at the Front" organization established at the beginning of the war and took part in formulating the first reservists framework written at the national level. Meanwhile, he initiated and established the "Reichman Reservists" group, coordinated hundreds of inquiries from students serving on all fronts, and met with the university president to reflect the real needs that emerged from the field.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Student summaries and lecturer updates with personal attention',
          'Personal mentoring for track members and academic assistance',
          'Connection to psychological care and processing',
          'Direct and accessible contact with deans'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'fun',
        title: 'Leveling Up Fun and Campus Atmosphere',
        subtitle: 'Reichman students don\'t need a reason to party – we simply deserve to enjoy.',
        content: 'We\'ll bring back the legendary atmosphere of "The Interdisciplinary" with parties that will remind you why you\'re here (and it\'s not just for the degree...). Performances, events, bonding activities, fairs and festivals that will connect students to the amazing and diverse community.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Performances and bonding events',
          'Festivals and fairs',
          'Drive-in movie screenings',
          'Food festivals',
          'Peak events throughout the academic year',
          'Fair treatment between supply and demand in ticket sales',
          'Events for all audiences: Israelis, internationals',
          'No queues and pressure',
          'Accessibility and availability for all students'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'networking',
        title: 'Leveling Up Networking and Reichman Community',
        subtitle: 'Networking is one of the unique resources of Reichman University!',
        content: 'Our goal is to create a strong and cohesive community that cares for today\'s students and alumni. We will work to connect different students on campus, from different schools and different years.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Think tanks and hosting meetings between schools',
          'Collaborations and connections between students',
          'Sense of belonging and friends from all departments',
          'Becoming the most united and strongest campus in Israel'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'rights',
        title: 'Leveling Up Student Rights',
        subtitle: 'Delayed assignments? Rights violated? You have one clear address.',
        content: 'Araba has three years of experience as a representative and one year as academic coordinator – she knows the system, the solutions, and the way to get things done. We are here to ensure that your rights are respected and that you receive what you deserve.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Strengthening track representatives and coordinators',
          'Building an effective academic forum',
          'Quick and accurate response to every inquiry',
          'Handling delays and examining exceptions'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'smart-campus',
        title: 'Leveling Up Smart and Accessible Campus',
        subtitle: 'No more searching for an empty classroom!',
        content: 'We will launch a smart system that will reflect available classrooms and learning spaces in real time – throughout the year, and especially during exam periods.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Smart system for available classrooms in real time',
          'Ability to book classrooms in advance',
          'Comprehensive study database with summaries from all schools',
          'Everything in one place, convenient and accessible'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'international',
        title: 'Leveling Up International School',
        subtitle: 'The International School should be involved in welfare and atmosphere, in community and spirit of the place.',
        content: 'We will establish a special position for a representative from the International School in the union management, whose purpose will be to reflect the student needs.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Special representation in union management',
          'Real-time reflection of student needs',
          'Adapting events to all audiences',
          'Real-time handling of problems and demands'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'wellness',
        title: 'Leveling Up Campus Welfare',
        subtitle: 'The campus is our home – and we are here to make it better.',
        content: 'We will restore what worked, strengthen what is needed, and upgrade what is possible – from classrooms and libraries, through sports and recreation, to dormitories and daily life. And yes, the cafeteria will finally get an answer.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Improving classrooms and libraries',
          'Upgrading sports and recreation',
          'Improving dormitories and daily life',
          'Solving the cafeteria problem'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'entrepreneurship',
        title: 'Leveling Up Entrepreneurship and Support for Independent Students',
        subtitle: 'There are quite a few students who don\'t just study – but also build, create and lead.',
        content: 'We want to see them getting more space, more connections and more opportunities. We will issue calls for the independent community on campus to provide the services that the union consumes.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Calls for the independent community',
          'Strengthening the framework for entrepreneurs and independents',
          'Open stage events for inspiration',
          'Exposure to collaborations between schools'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'career',
        title: 'Leveling Up Making the Day After Accessible',
        subtitle: 'The degree is an important foundation – but we know it doesn\'t end there.',
        content: 'We will expand collaborations with alumni, organizations and institutions that will accompany you beyond studies. We will create tracks, connections and content that will better prepare you for career.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Expanding collaborations with alumni',
          'Connections to organizations and institutions',
          'Preparation for career and action',
          'Practical experience opportunities in industry'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'gender',
        title: 'Leveling Up Female Representation',
        subtitle: 'We will work to strengthen female representation at all levels of the union.',
        content: 'We will promote a policy of gender balance in all committees and union projects, and seriously address the unique needs of female students on campus.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Strengthening female representation in union leadership',
          'Gender balance in committees and projects',
          'Addressing unique needs of female students',
          'Encouraging female leadership on campus'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'academic-staff',
        title: 'Leveling Up Working with Academic Staff',
        subtitle: 'Establishing regular work routines with university management and school deans.',
        content: 'Maintaining ongoing and professional dialogue between the union and management and a platform for promoting your interests, ensuring that changing needs receive accurate and quality response.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Maintaining ongoing dialogue with management',
          'Platform for promoting student interests',
          'Accurate response to changing needs',
          'Recognition events for selected lecturers'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'budget',
        title: 'Leveling Up Budget Management and Transparency',
        subtitle: 'The union budget belongs to the students – and it should work for them.',
        content: 'We will re-examine where your money goes, and change the order of priorities. We will emphasize what is really important to you and will make a difference in the field.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Re-examining budget expenditures',
          'Changing order of priorities',
          'Emphasis on what matters to students',
          'High transparency in financial management'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'values',
        title: 'Leveling Up Values and Heritage of Reichman University',
        subtitle: 'A campus built on values, morality, Israeliness and Zionism.',
        content: 'We will establish events in collaboration with the hostages headquarters, marches and memorial events for the fallen and captives, initiate lectures by Prof. Uriel Reichman to tell the story of the place.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Events in collaboration with hostages headquarters',
          'Marches and memorial events',
          'Lectures by Prof. Uriel Reichman',
          'Strengthening values and ideology'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'minorities',
        title: 'Leveling Up Minority Representation',
        subtitle: 'We will promote the voice and demands of minorities on campus.',
        content: 'In holidays, occasions, important dates, needs and requests. Our campus has room for everyone\'s needs!',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Promoting minority voices',
          'Addressing different holidays and occasions',
          'Response to unique needs',
          'Creating space for all audiences'
        ],
        color: 'from-blue-700 to-blue-800'
      },
      {
        id: 'environment',
        title: 'Leveling Up Protecting Green Environment',
        subtitle: 'We will work to make the union and campus greener and more accessible.',
        content: 'We will promote recycling initiatives and reducing the use of disposable items in all union events, hold green activities throughout the year.',
        actions: 'How We\'ll Take Care of You:',
        items: [
          'Recycling initiatives in all events',
          'Reducing use of disposable items',
          'Green activities throughout the year',
          'Encouraging environmental awareness'
        ],
        color: 'from-blue-700 to-blue-800'
      }
    ],

    ctaTitle: 'Leveling Up',
    ctaText: 'We don\'t make empty promises and don\'t speak in slogans. We come with experience, with a consolidated work plan and most importantly with a genuine desire to improve what needs to be improved.',
    ctaHighlight: 'This is your time and opportunity to make an impact, to choose people who know the system from the inside',
    ctaFinal: 'See you at the polls, next to the White Campaign ballot!',
    ctaButton: 'Let\'s Level Up Together!',
    instagramButton: 'Follow Us on Instagram',
    instagramHandle: '@thewhitecampaign',
    footerText: 'We came to work for you with full transparency and for those who really matter – you.',
    accessibility: {
      title: 'Accessibility Tools',
      increaseFont: 'Increase Text',
      decreaseFont: 'Decrease Text',
      highContrast: 'High Contrast',
      normalContrast: 'Normal Contrast',
      skipToMain: 'Skip to Main Content'
    }
  }
};

export default function Campaign() {
  const [isVisible, setIsVisible] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [language, setLanguage] = useState('he');
  const [showAccessibilityToolbar, setShowAccessibilityToolbar] = useState(false);
  const skipLinkRef = useRef(null);

  const t = content[language];

  useEffect(() => {
    setIsLoaded(true);
    
    // Add Rubik font
    const linkElement = document.createElement('link');
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);
    
    // Apply Rubik font to body
    document.body.style.fontFamily = 'Rubik, sans-serif';
    
    // Check for user motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReducedMotion);
    
    // Update document attributes
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    
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
      // Clean up font when component unmounts
      if (linkElement && linkElement.parentNode) {
        linkElement.parentNode.removeChild(linkElement);
      }
    };
  }, [language, t.lang, t.dir]);

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
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
        * {
          font-family: 'Rubik', sans-serif !important;
        }
        
        /* Plus pattern background - Simple plus pattern */
        .plus-pattern {
          background-image: 
            linear-gradient(90deg, #C6E5F3 1px, transparent 1px),
            linear-gradient(180deg, #C6E5F3 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0;
        }
        
        .plus-pattern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(90deg, transparent 9px, #C6E5F3 9px, #C6E5F3 11px, transparent 11px),
            linear-gradient(180deg, transparent 9px, #C6E5F3 9px, #C6E5F3 11px, transparent 11px);
          background-size: 20px 20px;
          opacity: 0.4;
          pointer-events: none;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(0.5deg); }
          66% { transform: translateY(-8px) rotate(-0.5deg); }
        }
        
        @keyframes glow-white {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 
                        0 0 20px rgba(255, 255, 255, 0.6),
                        0 0 30px rgba(255, 255, 255, 0.4); 
          }
          50% { 
            text-shadow: 0 0 20px rgba(255, 255, 255, 1), 
                        0 0 40px rgba(255, 255, 255, 0.8),
                        0 0 60px rgba(255, 255, 255, 0.6); 
          }
        }
        
        .animate-float {
          animation: ${reducedMotion ? 'none' : 'float 6s ease-in-out infinite'};
        }
        
        .glow-white {
          animation: ${reducedMotion ? 'none' : 'glow-white 3s ease-in-out infinite'};
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .card-hover {
          transition: ${reducedMotion ? 'none' : 'all 0.3s ease'};
        }
        
        .card-hover:hover {
          transform: ${reducedMotion ? 'none' : 'translateY(-5px)'};
          box-shadow: 0 15px 30px rgba(31, 57, 110, 0.1);
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
        
        /* Updated Color variables */
        .color-primary { color: #1F396E; }
        .bg-primary { background-color: #1F396E; }
        .color-light-teal { color: #C6E5F3; }
        .bg-light-teal { background-color: #C6E5F3; }
        .color-medium-teal { color: #BFE7F5; }
        .bg-medium-teal { background-color: #BFE7F5; }
        .color-medium-blue { color: #4A90E2; }
        .bg-medium-blue { background-color: #4A90E2; }
        .color-dark { color: #1A1A1A; }
        .bg-dark { background-color: #1A1A1A; }
        
        /* Mobile text contrast improvements */
        @media (max-width: 768px) {
          .platform-text {
            color: #1F396E !important;
            font-weight: 700 !important;
          }
          
          .platform-subtitle {
            color: #1A1A1A !important;
            font-weight: 800 !important;
          }
          
          .platform-content {
            color: #1A1A1A !important;
            font-weight: 600 !important;
          }
          
          .platform-items {
            color: #1F396E !important;
            font-weight: 700 !important;
          }
          
          .platform-background {
            background: rgba(255, 255, 255, 1) !important;
            border: 2px solid #C6E5F3 !important;
          }
          
          .platform-section {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: none !important;
          }
          
          .platform-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: none !important;
          }
          
          section[data-animate] {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          .card-hover {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
        
        /* Focus styles */
        .focus-visible:focus {
          outline: 3px solid #4A90E2;
          outline-offset: 2px;
        }
        
        /* Skip link */
        .skip-link {
          position: absolute;
          top: -40px;
          ${language === 'he' ? 'left: 6px' : 'right: 6px'};
          background: #1F396E;
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
        aria-label={t.accessibility.skipToMain}
      >
        {t.accessibility.skipToMain}
      </a>

      {/* Accessibility Toolbar */}
      <div className={`fixed top-4 z-50 transition-all duration-300 ${language === 'he' ? 'left-4' : 'right-4'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setShowAccessibilityToolbar(!showAccessibilityToolbar)}
          className="text-white p-3 rounded-full shadow-lg mb-2 focus-visible touch-manipulation"
          style={{ backgroundColor: '#4A90E2' }}
          aria-label={showAccessibilityToolbar ? 'סגור כלי נגישות' : 'פתח כלי נגישות'}
          aria-expanded={showAccessibilityToolbar}
        >
          <Eye className="w-5 h-5" />
        </button>

        {/* Toolbar Content */}
        <div 
          className={`bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
            showAccessibilityToolbar 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
          } max-w-[280px] sm:max-w-none`}
          style={{ border: '1px solid #C6E5F3' }}
          role="toolbar"
          aria-label={t.accessibility.title}
          aria-hidden={!showAccessibilityToolbar}
        >
          <h3 className="text-xs md:text-sm font-bold mb-2" style={{ color: '#1F396E' }}>{t.accessibility.title}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 md:gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={increaseFontSize}
                aria-label={t.accessibility.increaseFont}
                className="p-2 min-w-[40px] touch-manipulation text-xs"
                style={{ borderColor: '#C6E5F3', color: '#1F396E' }}
              >
                <Plus className="w-3 h-3 md:w-4 md:h-4" />
                <span className="sr-only">{t.accessibility.increaseFont}</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={decreaseFontSize}
                aria-label={t.accessibility.decreaseFont}
                className="p-2 min-w-[40px] touch-manipulation text-xs"
                style={{ borderColor: '#C6E5F3', color: '#1F396E' }}
              >
                <Minus className="w-3 h-3 md:w-4 md:h-4" />
                <span className="sr-only">{t.accessibility.decreaseFont}</span>
              </Button>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={toggleHighContrast}
              aria-label={highContrast ? t.accessibility.normalContrast : t.accessibility.highContrast}
              className="flex items-center gap-1 md:gap-2 text-xs p-2 touch-manipulation"
              style={{ borderColor: '#C6E5F3', color: '#1F396E' }}
            >
              {highContrast ? <EyeOff className="w-3 h-3 md:w-4 md:h-4" /> : <Eye className="w-3 h-3 md:w-4 md:h-4" />}
              <span className="text-[10px] md:text-xs leading-tight">
                {highContrast ? t.accessibility.normalContrast : t.accessibility.highContrast}
              </span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={toggleLanguage}
              aria-label={language === 'he' ? 'Switch to English' : 'עבור לעברית'}
              className="flex items-center gap-1 md:gap-2 text-xs p-2 touch-manipulation"
              style={{ borderColor: '#C6E5F3', color: '#1F396E' }}
            >
              <Languages className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-[10px] md:text-xs leading-tight">
                {language === 'he' ? 'EN' : 'עב'}
              </span>
            </Button>
          </div>
        </div>
      </div>

      <div 
        className={`min-h-screen plus-pattern font-${fontSize} ${highContrast ? 'high-contrast' : ''} relative`} 
        dir={t.dir}
        lang={t.lang}
        style={{ 
          fontFamily: 'Rubik, sans-serif',
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Main Content */}
        <main id="main-content" tabIndex="-1">
          {/* Hero Section - Updated Layout */}
          <section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1F396E 0%, #4A90E2 100%)' }}
            aria-labelledby="hero-title"
            role="banner"
          >
            {/* Content and Image Layout */}
            <div className="container mx-auto px-4 flex flex-col items-center relative z-10 min-h-screen">
              
              {/* Logo/Title - moved down slightly */}
              <header className="text-center mb-6 mt-20">
                <h1 
                  id="hero-title"
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight glow-white"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {t.title}
                </h1>
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6" role="img" aria-label="סלוגן הקמפיין">
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full" aria-hidden="true"></div>
                  <div className="flex items-center justify-center">
                    <Badge className="text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-white border-white/30 glass-effect flex items-center" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" aria-hidden="true" />
                      {t.slogan}
                    </Badge>
                  </div>
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-l from-transparent to-white rounded-full" aria-hidden="true"></div>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-white font-medium opacity-90" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  {t.university}
                </p>
              </header>

              {/* Main Image - Centered on mobile */}
              <div className="w-full max-w-lg lg:max-w-xl mb-8 lg:hidden">
                <div className="aspect-square w-full relative">
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-60" style={{ background: 'linear-gradient(45deg, #C6E5F3, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                  <div className="absolute inset-2 rounded-full blur-xl opacity-40" style={{ background: 'linear-gradient(135deg, #BFE7F5, #C6E5F3)' }} aria-hidden="true"></div>
                  
                  {/* Main image container with enhanced styling */}
                  <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-2xl" style={{ 
                    boxShadow: '0 25px 50px rgba(31, 57, 110, 0.3), 0 0 0 4px rgba(198, 229, 243, 0.3), 0 0 0 8px rgba(198, 229, 243, 0.1)' 
                  }}>
                    <img 
                      src="/images/team-photo2.jpg" 
                      alt="רז בן חיים וערבה בנקין שדה, מועמדי הקמפיין הלבן לאגודת הסטודנטים באוניברסיטת רייכמן" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full flex items-center justify-center flex-col"
                      style={{display: 'none', background: 'linear-gradient(135deg, #C6E5F3, #BFE7F5)'}}
                    >
                      <div className="flex gap-8 mb-8">
                        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)' }} aria-hidden="true">
                          <Users className="w-12 h-12 text-white" />
                        </div>
                        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1F396E, #4A90E2)' }} aria-hidden="true">
                          <Star className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-center px-8 leading-tight" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>
                        רז וערבה<br />
                        <span className="text-xl font-semibold" style={{ color: '#4A90E2' }}>הקמפיין הלבן</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating elements around the image */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full animate-float" style={{ background: '#C6E5F3', animationDelay: '0s' }} aria-hidden="true"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full animate-float" style={{ background: '#4A90E2', animationDelay: '2s' }} aria-hidden="true"></div>
                  <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full animate-float" style={{ background: '#1F396E', animationDelay: '4s' }} aria-hidden="true"></div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center w-full max-w-6xl">
                
                {/* Content Side - Desktop */}
                <div className={`text-center lg:text-${language === 'he' ? 'right' : 'left'} lg:order-${language === 'he' ? '2' : '1'} flex flex-col justify-center`}>
                  {/* Main Message */}
                  <section className="glass-effect rounded-2xl p-6 sm:p-8 mb-8" aria-labelledby="main-message">
                    <h2 
                      id="main-message"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {t.heroTitle} <span style={{ color: '#1F396E' }}>
                        {language === 'he' ? 'בשבילכם' : 'for You'}
                      </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed opacity-90" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {t.heroSubtitle}
                    </p>
                  </section>

                  {/* Action Buttons */}
                  <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center" aria-label="ניווט עיקרי">
                    <Button 
                      size="lg" 
                      className="bg-white text-lg px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus-visible w-full sm:w-auto"
                      style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                      onClick={() => scrollToSection('platform')}
                      aria-describedby="platform-description"
                    >
                      <Sparkles className={`${language === 'he' ? 'ml-2' : 'mr-2'} h-5 w-5`} aria-hidden="true" />
                      {t.readPlatform}
                    </Button>
                    <div id="platform-description" className="sr-only">עבור לקריאת המצע המפורט של הקמפיין</div>
                  
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="glass-effect text-white border-white/30 hover:bg-white/20 text-lg px-8 py-5 rounded-xl transition-all duration-300 focus-visible w-full sm:w-auto"
                      onClick={() => scrollToSection('team')}
                      aria-describedby="team-description"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {t.meetTeam}
                    </Button>
                    <div id="team-description" className="sr-only">עבור להכרת צוות הקמפיין</div>
                  </nav>
                </div>

                {/* Image Side - Desktop */}
                <div className={`lg:order-${language === 'he' ? '1' : '2'} flex justify-center lg:justify-${language === 'he' ? 'start' : 'end'}`}>
                  <div className="relative w-full max-w-lg lg:max-w-2xl">
                    <div className="aspect-square w-full relative">
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 rounded-full blur-2xl opacity-60" style={{ background: 'linear-gradient(45deg, #C6E5F3, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                      <div className="absolute inset-2 rounded-full blur-xl opacity-40" style={{ background: 'linear-gradient(135deg, #BFE7F5, #C6E5F3)' }} aria-hidden="true"></div>
                      
                      {/* Main image container with enhanced styling */}
                      <div className="absolute inset-4 bg-white rounded-full overflow-hidden shadow-2xl" style={{ 
                        boxShadow: '0 25px 50px rgba(31, 57, 110, 0.3), 0 0 0 4px rgba(198, 229, 243, 0.3), 0 0 0 8px rgba(198, 229, 243, 0.1)' 
                      }}>
                        <img 
                          src="/images/team-photo2.jpg" 
                          alt="רז בן חיים וערבה בנקין שדה, מועמדי הקמפיין הלבן לאגודת הסטודנטים באוניברסיטת רייכמן" 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-full h-full flex items-center justify-center flex-col"
                          style={{display: 'none', background: 'linear-gradient(135deg, #C6E5F3, #BFE7F5)'}}
                        >
                          <div className="flex gap-8 mb-8">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)' }} aria-hidden="true">
                              <Users className="w-12 h-12 text-white" />
                            </div>
                            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #1F396E, #4A90E2)' }} aria-hidden="true">
                              <Star className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <p className="text-3xl font-bold text-center px-8 leading-tight" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>
                            רז וערבה<br />
                            <span className="text-xl font-semibold" style={{ color: '#4A90E2' }}>הקמפיין הלבן</span>
                          </p>
                        </div>
                      </div>
                      
                      {/* Floating elements around the image */}
                      <div className="absolute top-4 right-4 w-6 h-6 rounded-full animate-float" style={{ background: '#C6E5F3', animationDelay: '0s' }} aria-hidden="true"></div>
                      <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full animate-float" style={{ background: '#4A90E2', animationDelay: '2s' }} aria-hidden="true"></div>
                      <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full animate-float" style={{ background: '#1F396E', animationDelay: '4s' }} aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Content - Below Image */}
              <div className="lg:hidden text-center w-full max-w-lg">
                {/* Main Message */}
                <section className="glass-effect rounded-2xl p-6 mb-8" aria-labelledby="main-message-mobile">
                  <h2 
                    id="main-message-mobile"
                    className="text-2xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {t.heroTitle} <span style={{ color: '#1F396E' }}>
                      {language === 'he' ? 'בשבילכם' : 'for You'}
                    </span>
                  </h2>
                  <p className="text-sm leading-relaxed text-white opacity-90" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {t.heroSubtitle}
                  </p>
                </section>

                {/* Action Buttons */}
                <nav className="flex flex-col gap-4 items-center" aria-label="ניווט עיקרי">
                  <Button 
                    size="lg" 
                    className="bg-white text-lg px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus-visible w-full"
                    style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                    onClick={() => scrollToSection('platform')}
                  >
                    <Sparkles className={`${language === 'he' ? 'ml-2' : 'mr-2'} h-5 w-5`} aria-hidden="true" />
                    {t.readPlatform}
                  </Button>
                
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-effect text-white border-white/30 hover:bg-white/20 text-lg px-8 py-5 rounded-xl transition-all duration-300 focus-visible w-full"
                    onClick={() => scrollToSection('team')}
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {t.meetTeam}
                  </Button>
                </nav>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
              <ChevronDown className="h-6 w-6 text-white/70" />
            </div>
          </section>

          {/* Team Section */}
          <section 
            id="team" 
            className="py-20 bg-white relative" 
            data-animate
            aria-labelledby="team-title"
            tabIndex="-1"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #C6E5F3, #4A90E2, #1F396E)' }}></div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto opacity-100 translate-y-0">
                <header className="text-center mb-16">
                  <div className="mb-6">
                    <Badge className="text-lg px-6 py-3 mb-4" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)', color: 'white', fontFamily: 'Rubik, sans-serif' }}>
                      <Users className="w-5 h-5 ml-2" />
                      צוות
                    </Badge>
                  </div>
                  <h2 
                    id="team-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4"
                    style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                  >
                    {t.teamTitle}
                  </h2>
                  <div className="w-32 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(to right, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                  <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4" style={{ color: '#1A1A1A', fontFamily: 'Rubik, sans-serif' }}>
                    {t.teamSubtitle}
                  </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto px-4">
                  {/* Raz */}
                  <article className="card-hover bg-white overflow-hidden rounded-2xl" style={{ border: '2px solid #C6E5F3', boxShadow: '0 4px 16px rgba(31, 57, 110, 0.1)' }}>
                    <Card>
                      <CardHeader className="text-center p-6 sm:p-8">
                        <div className="relative mb-6">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
                            <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/raz-ben-haim.jpg" 
                                alt={`תמונה של ${t.chairman}, מועמד ליו״ר הקמפיין הלבן`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full flex items-center justify-center" style={{display: 'none', background: 'linear-gradient(135deg, #C6E5F3, #4A90E2)'}}>
                                <Users className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: '#1F396E' }} aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl mb-3" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>{t.chairman}</CardTitle>
                        <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)', fontFamily: 'Rubik, sans-serif' }}>
                          {t.razDetails.title}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label={`פרטי ${t.chairman}`}>
                          {t.razDetails.details.map((detail, index) => (
                            <div key={index} className="p-3 sm:p-4 rounded-xl" style={{ backgroundColor: '#C6E5F3', border: '1px solid #4A90E2' }} role="listitem">
                              <p className="font-semibold text-sm sm:text-base" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>{detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>

                  {/* Araba */}
                  <article className="card-hover bg-white overflow-hidden rounded-2xl" style={{ border: '2px solid #C6E5F3', boxShadow: '0 4px 16px rgba(31, 57, 110, 0.1)' }}>
                    <Card>
                      <CardHeader className="text-center p-6 sm:p-8">
                        <div className="relative mb-6">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
                            <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/araba-benkin-sade2.jpg" 
                                alt={`תמונה של ${t.viceChairman}, מועמדת לסגנית יו״ר הקמפיין הלבן`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full flex items-center justify-center" style={{display: 'none', background: 'linear-gradient(135deg, #C6E5F3, #4A90E2)'}}>
                                <Star className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: '#1F396E' }} aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl mb-3" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>{t.viceChairman}</CardTitle>
                        <Badge className="text-base sm:text-lg px-4 sm:px-6 py-2 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)', fontFamily: 'Rubik, sans-serif' }}>
                          {t.arabaDetails.title}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label={`פרטי ${t.viceChairman}`}>
                          {t.arabaDetails.details.map((detail, index) => (
                            <div key={index} className="p-3 sm:p-4 rounded-xl" style={{ backgroundColor: '#C6E5F3', border: '1px solid #4A90E2' }} role="listitem">
                              <p className="font-semibold text-sm sm:text-base" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>{detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </div>

                {/* Team Quote */}
                <aside className="mt-16 text-center px-4">
                  <blockquote className="p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto" style={{ background: 'linear-gradient(135deg, #1F396E, #4A90E2)' }}>
                    <p className="text-lg sm:text-2xl md:text-3xl text-white font-bold leading-relaxed" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {t.teamQuote}
                    </p>
                  </blockquote>
                  
                  {/* Instagram Button - Team Section */}
                  <div className="mt-8">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 focus-visible w-full sm:w-auto hover:shadow-lg transform hover:-translate-y-1"
                      style={{ 
                        borderColor: '#4A90E2', 
                        color: '#1F396E', 
                        fontFamily: 'Rubik, sans-serif',
                        backgroundColor: 'white'
                      }}
                      onClick={() => window.open('https://www.instagram.com/thewhitecampaign?igsh=MTBocWU2MXZtbXJiNw==', '_blank', 'noopener,noreferrer')}
                      aria-label={`${t.instagramButton} - פתיחה בטאב חדש`}
                    >
                      <Instagram className={`${language === 'he' ? 'ml-3' : 'mr-3'} h-5 w-5`} aria-hidden="true" />
                      {t.instagramButton}
                      <ExternalLink className={`${language === 'he' ? 'mr-3' : 'ml-3'} h-4 w-4`} aria-hidden="true" />
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
            
            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #1F396E, #4A90E2, #C6E5F3)' }}></div>
          </section>

          {/* Vision Section */}
          <section 
            id="vision" 
            className="py-20 relative" 
            style={{ backgroundColor: '#BFE7F5' }}
            data-animate
            aria-labelledby="vision-title"
            tabIndex="-1"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #C6E5F3, #4A90E2, #1F396E)' }}></div>
            
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto opacity-100 translate-y-0">
                <header className="text-center mb-16">
                  <div className="mb-6">
                    <Badge className="text-lg px-6 py-3 mb-4" style={{ background: 'linear-gradient(135deg, #1F396E, #4A90E2)', color: 'white', fontFamily: 'Rubik, sans-serif' }}>
                      <Target className="w-5 h-5 ml-2" />
                      חזון
                    </Badge>
                  </div>
                  <h2 
                    id="vision-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4"
                    style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                  >
                    {t.visionTitle}
                  </h2>
                  <div className="w-32 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(to right, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                </header>

                <div className="p-8 sm:p-12 rounded-2xl shadow-lg mx-4 sm:mx-0" style={{ backgroundColor: '#FFFFFF', border: '3px solid #4A90E2' }}>
                  <p className="text-lg sm:text-xl leading-relaxed text-center mb-12 font-medium px-4 sm:px-0" style={{ color: '#1A1A1A', fontFamily: 'Rubik, sans-serif' }}>
                    {t.visionText}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="עקרונות החזון">
                    {t.visionPoints.map((point, index) => (
                      <div key={index} className="text-center group" role="listitem">
                        {/* כל מה שעובד - ירוק, כל מה שלא עבד - אדום, תמורה אמיתית - כחול */}
                        <div className={`${
                          index === 0 ? 'w-24 h-24 sm:w-28 sm:h-28' : 'w-16 h-16 sm:w-20 sm:h-20'
                        } rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`} 
                        style={{ 
                          background: index === 0 ? 'linear-gradient(135deg, #10B981, #059669)' : 
                                    index === 1 ? 'linear-gradient(135deg, #EF4444, #DC2626)' : 
                                    'linear-gradient(135deg, #4A90E2, #1F396E)'
                        }} aria-hidden="true">
                          <span className={`${
                            index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                          } text-white font-bold`} style={{ fontFamily: 'Rubik, sans-serif' }}>
                            {index === 0 ? '✓' : index === 1 ? '✗' : '↗'}
                          </span>
                        </div>
                        <h3 className={`${
                          index === 0 ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                        } font-bold mb-2`} style={{ 
                          color: index === 0 ? '#059669' : 
                                index === 1 ? '#DC2626' : 
                                '#1F396E', 
                          fontFamily: 'Rubik, sans-serif' 
                        }}>
                          {point.title}
                        </h3>
                        <p className={`font-semibold ${
                          index === 0 ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                        }`} style={{ 
                          color: index === 0 ? '#065F46' : 
                                index === 1 ? '#991B1B' : 
                                '#1A1A1A', 
                          fontFamily: 'Rubik, sans-serif' 
                        }}>
                          {point.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #1F396E, #4A90E2, #C6E5F3)' }}></div>
          </section>

          {/* Platform Section */}
          <section 
            id="platform" 
            className="platform-section py-20 bg-white relative" 
            data-animate
            aria-labelledby="platform-title"
            tabIndex="-1"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(to right, #C6E5F3, #4A90E2, #1F396E)' }}></div>
            
            <div className="container mx-auto px-4">
              <div className="platform-section opacity-100 translate-y-0">
                <header className="text-center mb-16">
                  <div className="mb-6">
                    <Badge className="text-lg px-6 py-3 mb-4" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)', color: 'white', fontFamily: 'Rubik, sans-serif' }}>
                      <GraduationCap className="w-5 h-5 ml-2" />
                      מצע
                    </Badge>
                  </div>
                  <h2 
                    id="platform-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4"
                    style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                  >
                    {t.platformTitle}
                  </h2>
                  <div className="w-32 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(to right, #4A90E2, #1F396E)' }} aria-hidden="true"></div>
                  <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4" style={{ color: '#1A1A1A', fontFamily: 'Rubik, sans-serif' }}>
                    {t.platformSubtitle}
                  </p>
                </header>

                <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto px-4">
                  {t.sections.map((section, index) => (
                    <article key={section.id} className="platform-card card-hover overflow-hidden border-0 shadow-xl opacity-100 translate-y-0">
                      <Card>
                        <CardHeader className="text-white p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #1F396E, #4A90E2)' }}>
                          <CardTitle className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
                            <div className="p-2 sm:p-3 bg-white/20 rounded-full flex-shrink-0" aria-hidden="true">
                              {index === 0 && <Shield className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 1 && <Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 2 && <Users className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 3 && <Target className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 4 && <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 5 && <Globe className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 6 && <Heart className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 7 && <Star className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 8 && <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 9 && <Users className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 10 && <Target className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 11 && <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 12 && <Shield className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 13 && <Star className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 14 && <Users className="w-6 h-6 sm:w-8 sm:h-8" />}
                              {index === 15 && <Leaf className="w-6 h-6 sm:w-8 sm:h-8" />}
                            </div>
                            <span className="leading-tight">{section.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="platform-background p-6 sm:p-8 bg-white shadow-sm" style={{ border: '2px solid #C6E5F3' }}>
                          <p className="platform-subtitle text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed font-bold" style={{ color: '#1A1A1A', fontFamily: 'Rubik, sans-serif' }}>
                            {section.subtitle}
                          </p>
                          {section.content && (
                            <p className="platform-content text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed font-semibold" style={{ color: '#1A1A1A', fontFamily: 'Rubik, sans-serif' }}>
                              {section.content}
                            </p>
                          )}
                          <div className="p-4 sm:p-6 rounded-2xl" style={{ backgroundColor: '#C6E5F3', border: '2px solid #4A90E2' }}>
                            <h4 className="font-black mb-3 text-base sm:text-lg" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>{section.actions}</h4>
                            <ul className="space-y-2" role="list">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3 text-sm sm:text-base platform-items font-bold" role="listitem" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>
                                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#1F396E' }} aria-hidden="true"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </article>
                  ))}
                  
                  {/* Instagram Button - Platform Section */}
                  <div className="text-center mt-12 px-4">
                    <div className="p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto" style={{ background: 'linear-gradient(135deg, #C6E5F3, #BFE7F5)', border: '2px solid #4A90E2' }}>
                      <p className="text-lg sm:text-xl font-bold mb-6" style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}>
                        {language === 'he' ? 'רוצים לקבל עדכונים על הקמפיין?' : 'Want to get campaign updates?'}
                      </p>
                      <Button 
                        size="lg"
                        className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 focus-visible w-full sm:w-auto hover:shadow-lg transform hover:-translate-y-1 text-white"
                        style={{ 
                          background: 'linear-gradient(135deg, #1F396E, #4A90E2)',
                          fontFamily: 'Rubik, sans-serif'
                        }}
                        onClick={() => window.open('https://www.instagram.com/thewhitecampaign?igsh=MTBocWU2MXZtbXJiNw==', '_blank', 'noopener,noreferrer')}
                        aria-label={`${t.instagramButton} - פתיחה בטאב חדש`}
                      >
                        <Instagram className={`${language === 'he' ? 'ml-3' : 'mr-3'} h-5 w-5`} aria-hidden="true" />
                        {t.instagramButton}
                        <ExternalLink className={`${language === 'he' ? 'mr-3' : 'ml-3'} h-4 w-4`} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section 
            className="py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1F396E 0%, #4A90E2 100%)' }}
            aria-labelledby="cta-title"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 
                  id="cta-title"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {t.ctaTitle}
                </h2>
            
                <div className="glass-effect rounded-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
                  <p className="text-base sm:text-xl md:text-2xl text-white leading-relaxed mb-4 sm:mb-6 opacity-90" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {t.ctaText}
                  </p>
                  
                  <div className="p-4 sm:p-6 rounded-xl mb-4 sm:mb-6" style={{ backgroundColor: 'rgba(198, 229, 243, 0.2)', border: '1px solid rgba(198, 229, 243, 0.3)' }}>
                    <p className="text-base sm:text-xl text-white font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {t.ctaHighlight}
                    </p>
                  </div>
                  
                  <div className="bg-white/20 p-6 sm:p-8 rounded-xl border border-white/30">
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {t.ctaFinal}
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-white text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 font-bold focus-visible w-full sm:w-auto"
                  style={{ color: '#1F396E', fontFamily: 'Rubik, sans-serif' }}
                  aria-label="קריאה לפעולה - בואו נעלה הילוך יחד"
                >
                  <Plus className={`${language === 'he' ? 'ml-3' : 'mr-3'} h-6 w-6`} aria-hidden="true" />
                  {t.ctaButton}
                  <ArrowRight className={`${language === 'he' ? 'mr-3' : 'ml-3'} h-6 w-6`} aria-hidden="true" />
                </Button>

                {/* Instagram Button */}
                <div className="mt-6 sm:mt-8">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="glass-effect text-white border-white/30 hover:bg-white/20 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 rounded-xl transition-all duration-300 focus-visible w-full sm:w-auto"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                    onClick={() => window.open('https://www.instagram.com/thewhitecampaign?igsh=MTBocWU2MXZtbXJiNw==', '_blank', 'noopener,noreferrer')}
                    aria-label={`${t.instagramButton} - פתיחה בטאב חדש`}
                  >
                    <Instagram className={`${language === 'he' ? 'ml-3' : 'mr-3'} h-5 w-5`} aria-hidden="true" />
                    {t.instagramButton}
                    <ExternalLink className={`${language === 'he' ? 'mr-3' : 'ml-3'} h-4 w-4`} aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="text-white py-8 sm:py-12"
          style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #1F396E 100%)' }}
          role="contentinfo"
          aria-label="מידע על הקמפיין"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#C6E5F3', fontFamily: 'Rubik, sans-serif' }}>
                {t.title}
              </h3>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6" aria-hidden="true">
                <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(to right, transparent, #4A90E2)' }}></div>
                <Badge className="text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base" style={{ background: 'linear-gradient(135deg, #4A90E2, #1F396E)', fontFamily: 'Rubik, sans-serif' }}>
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  {t.slogan}
                </Badge>
                <div className="h-px w-12 sm:w-20" style={{ background: 'linear-gradient(to left, transparent, #4A90E2)' }}></div>
              </div>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg px-4" style={{ color: '#C6E5F3', fontFamily: 'Rubik, sans-serif' }}>{t.university}</p>
              
              {/* Instagram Link in Footer */}
              <div className="mb-4 sm:mb-6">
                <button
                  onClick={() => window.open('https://www.instagram.com/thewhitecampaign?igsh=MTBocWU2MXZtbXJiNw==', '_blank', 'noopener,noreferrer')}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:bg-white/10 focus-visible"
                  style={{ border: '1px solid #4A90E2', color: '#C6E5F3' }}
                  aria-label={`עקבו אחרי ${t.instagramHandle} באינסטגרם - פתיחה בטאב חדש`}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  <span className="text-sm sm:text-base font-medium" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {t.instagramHandle}
                  </span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70" aria-hidden="true" />
                </button>
              </div>
              
              <p className="max-w-2xl mx-auto text-sm sm:text-base px-4" style={{ color: '#C6E5F3', fontFamily: 'Rubik, sans-serif' }}>
                {t.footerText}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 
