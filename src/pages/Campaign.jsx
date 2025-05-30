import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Users, Target, Phone, Share2, ExternalLink, GraduationCap, Heart, Lightbulb, Shield, Globe, Leaf, Star, Plus, ArrowRight, Sparkles, Eye, EyeOff, Minus, Languages } from 'lucide-react';
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
        'משפטים MBA שנה ג׳',
        'מנהל מחלקת מועדונים',
        'מנהל "סטודנטים בחזית"',
        'תכנית רובינשטיין למנהיגות חוקתית'
      ]
    },
    arabaDetails: {
      title: 'ערבה בנקין שדה',
      details: [
        'תקשורת שנה ג׳',
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
        title: 'תמיכה במילואימניקים',
        subtitle: 'המילואים לא נגמרים בשטח – האגודה תהיה הבית של משרתי המילואים לאורך כל התואר.',
        content: 'רז מכהן כמנהל בארגון "סטודנטים בחזית" שהוקם בתחילת המלחמה ולקח חלק בגיבוש מתווה המילואימניקים הראשון שנכתב, וברמה הארצית. במקביל – יזם והקים את קבוצת "המילואימניקים של רייכמן", ריכז מאות פניות מסטודנטים המשרתים בכלל החזיתות, ונפגש עם נשיא האוניברסיטה לשיקוף הצרכים האמיתיים שעלו מהשטח.',
        actions: 'מה נעשה:',
        items: [
          'סיכומים מסטודנטים ועדכונים מהמרצים ויחס אישי מהם',
          'ליווי אישי של חברי המסלול וסיוע אקדמי',
          'חיבור לטיפול ועיבוד פסיכולוגי',
          'קשר ישיר ונגיש מול הדיקנים'
        ],
        color: 'from-blue-500 via-blue-600 to-blue-700'
      },
      {
        id: 'fun',
        title: 'פאן ואווירה בקמפוס',
        subtitle: 'הסטודנטים ברייכמן לא צריכים סיבה למסיבה – פשוט מגיע לנו ליהנות.',
        content: 'נחזיר את האווירה האגדית של "הבינתחומי" עם מסיבות שיזכירו לכם למה אתם פה (וזה לא רק בשביל התואר...). הופעות, אירועים, פעילויות מגבשות, ירידים ופסטיבלים שיחברו את הסטודנטים לקהילה המדהימה והמגוונת.',
        actions: 'מה נעשה:',
        items: [
          'הופעות ואירועים מגבשים',
          'פסטיבלים וירידים',
          'הקרנות סרט דרייב-אין',
          'פסטיבלי אוכל',
          'אירועי שיא לאורך כל שנת הלימודים'
        ],
        promises: 'הבטחות:',
        commitments: [
          'יחס הוגן בין היצע לביקוש במכירות הכרטיסים',
          'אירועים לכל הקהלים: ישראלים, בינלאומיים',
          'ללא תורים ולחצים',
          'נגישות וזמינות לכל הסטודנטים'
        ],
        color: 'from-purple-500 via-pink-500 to-purple-600'
      },
      {
        id: 'networking',
        title: 'נטוורקינג וקהילת רייכמן',
        subtitle: 'הנטוורקינג הוא אחד המשאבים הייחודיים לאוניברסיטת רייכמן!',
        content: 'המטרה שלנו היא ליצור קהילה חזקה ומגובשת, שדואגת לסטודנטים של היום וגם לבוגריה. נפעל לחיבור בין סטודנטים שונים בקמפוס, מבתי ספר שונים ומשנים שונות.',
        actions: 'מה נעשה:',
        items: [
          'קבוצות חשיבה ומפגשי אירוח בין בתי ספר',
          'שיתופי פעולה וחיבורים בין הסטודנטים',
          'תחושת שייכות וחברים מכל החוגים',
          'הפיכה לקמפוס הכי מאוחד והכי חזק בארץ'
        ],
        color: 'from-cyan-500 via-blue-500 to-indigo-500'
      },
      {
        id: 'rights',
        title: 'זכויות הסטודנטים',
        subtitle: 'עבודות מתעכבות? זכויות מופרות? יש לכם כתובת אחת ברורה.',
        content: 'ערבה בעלת ניסיון של שלוש שנים כנציגה ושנה כרכזת אקדמית – היא מכירה את המערכת, את הפתרונות, ואת הדרך לעשות סדר.',
        actions: 'מה נעשה:',
        items: [
          'חיזוק נציגי ורכזי המסלול',
          'בניית פורום אקדמי אפקטיבי',
          'מענה מהיר ומדויק לכל פנייה',
          'טיפול בעיכובים ובחינת חריגות'
        ],
        color: 'from-green-500 via-emerald-500 to-green-600'
      },
      {
        id: 'smart-campus',
        title: 'קמפוס חכם ונגיש',
        subtitle: 'נגמרו החיפושים אחרי כיתה פנויה!',
        content: 'נשיק מערכת חכמה שתשקף בזמן אמת כיתות פנויות ומרחבי למידה זמינים – לאורך כל השנה, ובמיוחד בתקופות מבחנים.',
        actions: 'מה נעשה:',
        items: [
          'מערכת חכמה לכיתות פנויות בזמן אמת',
          'אפשרות להזמין כיתות מראש',
          'מאגר לימודי מקיף עם סיכומים מכל בתי הספר',
          'הכל במקום אחד, נוח ונגיש'
        ],
        color: 'from-teal-500 via-cyan-500 to-blue-500'
      },
      {
        id: 'international',
        title: 'בית הספר הבינלאומי',
        subtitle: 'בית הספר הבינלאומי צריך להיות מעורב ברווחה ובאווירה, בקהילה וברוח המקום.',
        content: 'נתקין תפקיד מיוחד לנציג מבית הספר הבינלאומי בהנהלת האגודה, שמטרתו תהיה לשקף את הצרכים הסטודנטיאליים.',
        actions: 'מה נעשה:',
        items: [
          'ייצוג מיוחד בהנהלת האגודה',
          'שיקוף צרכים סטודנטיאליים בזמן אמת',
          'התאמת אירועים לכל הקהלים',
          'טיפול בבעיות ודרישות בזמן אמת'
        ],
        color: 'from-indigo-500 via-purple-500 to-pink-500'
      },
      {
        id: 'wellness',
        title: 'רווחה בקמפוס',
        subtitle: 'הקמפוס הוא הבית שלנו – ואנחנו כאן כדי להפוך אותו לטוב יותר.',
        content: 'נחזיר את מה שעבד, נחזק את מה שצריך, ונשדרג את מה שאפשר – מהכיתות והספריות, דרך הספורט והפנאי, ועד למעונות וחיי היומיום. וכן, גם הקרנף יקבל סוף סוף מענה.',
        actions: 'מה נעשה:',
        items: [
          'שיפור הכיתות והספריות',
          'שדרוג הספורט והפנאי',
          'שיפור המעונות וחיי היומיום',
          'פתרון לבעיית הקרנף'
        ],
        color: 'from-teal-500 via-emerald-500 to-green-500'
      },
      {
        id: 'entrepreneurship',
        title: 'יזמות ותמיכה בסטודנטים עצמאיים',
        subtitle: 'יש לא מעט סטודנטים שלא רק לומדים – אלא גם בונים, יוצרים ומובילים.',
        content: 'נרצה לראות אותם מקבלים יותר מקום, יותר חיבורים ויותר הזדמנויות. נוציא קולות קוראים לקהילת העצמאיים בקמפוס לספק את השירותים שהאגודה צורכת.',
        actions: 'מה נעשה:',
        items: [
          'קולות קוראים לקהילת העצמאיים',
          'חיזוק המעטפת ליזמים ועצמאיים',
          'אירועי במה פתוחה להשראה',
          'חשיפה לשיתופי פעולה בין בתי ספר'
        ],
        color: 'from-orange-500 via-red-500 to-pink-500'
      },
      {
        id: 'career',
        title: 'הנגשת היום שאחרי',
        subtitle: 'התואר הוא בסיס חשוב – אבל אנחנו יודעים שזה לא נגמר שם.',
        content: 'נרחיב את שיתופי הפעולה עם בוגרים, ארגונים ומוסדות שילוו אתכם גם מעבר ללימודים. נייצר מסלולים, חיבורים ותכנים שיכינו אתכם טוב יותר לקריירה.',
        actions: 'מה נעשה:',
        items: [
          'הרחבת שיתופי פעולה עם בוגרים',
          'חיבורים לארגונים ומוסדות',
          'הכנה לקריירה ולעשייה',
          'אפשרויות התנסות מעשית בתעשייה'
        ],
        color: 'from-purple-500 via-indigo-500 to-blue-500'
      },
      {
        id: 'gender',
        title: 'ייצוג נשי',
        subtitle: 'נפעל לחיזוק הייצוג הנשי בכל דרגי האגודה.',
        content: 'נקדם מדיניות של איזון מגדרי בכל הוועדות ובפרויקטים של האגודה, ונתייחס ברצינות לצרכים הייחודיים של הסטודנטיות בקמפוס.',
        actions: 'מה נעשה:',
        items: [
          'חיזוק ייצוג נשי בהנהגת האגודה',
          'איזון מגדרי בוועדות ופרויקטים',
          'התייחסות לצרכים ייחודיים של סטודנטיות',
          'עידוד מנהיגות נשית בקמפוס'
        ],
        color: 'from-pink-500 via-purple-500 to-indigo-500'
      },
      {
        id: 'academic-staff',
        title: 'עבודה עם הסגל האקדמי',
        subtitle: 'הסדרת שגרות עבודה סדירות מול הנהלת האוניברסיטה ודיקני בתי הספר.',
        content: 'קיום שיח שוטף ומקצועי של האגודה מול ההנהלה ופלטפורמה לקידום האינטרסים שלכם, כך שנוודא שהצרכים המשתנים מקבלים מענה מדויק ואיכותי.',
        actions: 'מה נעשה:',
        items: [
          'קיום שיח שוטף עם ההנהלה',
          'פלטפורמה לקידום אינטרסי הסטודנטים',
          'מענה מדויק לצרכים משתנים',
          'אירועי הערכה למרצים נבחרים'
        ],
        color: 'from-blue-500 via-cyan-500 to-teal-500'
      },
      {
        id: 'budget',
        title: 'ניהול התקציב ושקיפות',
        subtitle: 'תקציב האגודה הוא של הסטודנטים – והוא צריך לעבוד בשבילם.',
        content: 'נבחן מחדש לאן הולך הכסף שלכם, ונשנה את סדרי העדיפויות. נשים דגש על מה שבאמת חשוב לכם ויעשה לכם שינוי בשטח.',
        actions: 'מה נעשה:',
        items: [
          'בחינה מחדש של הוצאות התקציב',
          'שינוי סדרי עדיפויות',
          'דגש על מה שחשוב לסטודנטים',
          'שקיפות גבוהה בניהול כלכלי'
        ],
        color: 'from-green-500 via-emerald-500 to-teal-500'
      },
      {
        id: 'values',
        title: 'ערכים ומורשת אוניברסיטת רייכמן',
        subtitle: 'קמפוס שבנוי על ערכים, על מוסר, על ישראליות וציונות.',
        content: 'נקים אירועים בשיתוף מטה החטופים, צעדות ואירועים לזכר הנופלים והשבויים, ניזום הרצאות של פרופ׳ אוריאל רייכמן לספר את סיפור המקום.',
        actions: 'מה נעשה:',
        items: [
          'אירועים בשיתוף מטה החטופים',
          'צעדות ואירועי זיכרון',
          'הרצאות של פרופ׳ אוריאל רייכמן',
          'חיזוק הערכים והאידיאולוגיה'
        ],
        color: 'from-blue-600 via-indigo-600 to-purple-600'
      },
      {
        id: 'minorities',
        title: 'ייצוג מיעוטים',
        subtitle: 'נקדם את קולם ואת דרישותיהם של המיעוטים בקמפוס.',
        content: 'בחגים, מועדים, תאריכים חשובים, צרכים ובקשות. בקמפוס שלנו יש מקום לצרכים של כולם!',
        actions: 'מה נעשה:',
        items: [
          'קידום קול המיעוטים',
          'התייחסות לחגים ומועדים שונים',
          'מענה לצרכים ייחודיים',
          'יצירת מקום לכל הקהלים'
        ],
        color: 'from-purple-500 via-pink-500 to-red-500'
      },
      {
        id: 'environment',
        title: 'שמירה על סביבה ירוקה',
        subtitle: 'נפעל להפוך את האגודה והקמפוס לירוקים יותר ונגישים יותר.',
        content: 'נקדם יוזמות מחזור והפחתת שימוש בכלים חד-פעמיים בכלל אירועי האגודה, נקיים פעילויות ירוקות לאורך השנה.',
        actions: 'מה נעשה:',
        items: [
          'יוזמות מחזור בכל האירועים',
          'הפחתת שימוש בכלים חד-פעמיים',
          'פעילויות ירוקות לאורך השנה',
          'עידוד מודעות סביבתית'
        ],
        color: 'from-green-600 via-emerald-600 to-teal-600'
      }
    ],

    ctaTitle: 'פשוט מעלים הילוך',
    ctaText: 'אנחנו לא מבטיחים הבטחות ריקות ולא מדברים בסיסמאות. אנחנו מגיעים עם ניסיון, עם תוכנית עבודה מגובשת והכי חשוב עם רצון אמיתי לשפר את מה שצריך.',
    ctaHighlight: 'זה הזמן וההזדמנות שלכם להשפיע, לבחור באנשים שמכירים את המערכת מבפנים',
    ctaFinal: 'ניפגש בקלפי, ליד הפתק של הקמפיין הלבן!',
    ctaButton: 'בואו נעלה הילוך יחד!',
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
    slogan: 'Shifting Up',
    university: 'Reichman University • Student Union',
    heroTitle: 'We Came to Work',
    heroSubtitle: 'Three years we\'ve been living the field, the campus, from the inside, really from the inside: from studies to parties, from reserves to classrooms and clubs.',
    readPlatform: 'Read Our Full Platform',
    meetTeam: 'Meet the Team',
    teamTitle: 'The Leading Team',
    teamSubtitle: 'Leaders with experience, vision and genuine passion for change',
    chairman: 'Chairman',
    viceChairman: 'Vice Chairman',
    razDetails: {
      title: 'Raz Ben Haim',
      details: [
        'Law MBA 3rd Year',
        'Clubs Department Manager',
        '"Students at the Front" Manager',
        'Rubinstein Constitutional Leadership Program'
      ]
    },
    arabaDetails: {
      title: 'Araba Benkin Sade',
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
        title: 'Support for Reservists',
        subtitle: 'Military service doesn\'t end in the field – the union will be the home of reservists throughout their degree.',
        content: 'Raz serves as manager at "Students at the Front" organization established at the beginning of the war and took part in formulating the first reservists framework written at the national level. Meanwhile, he initiated and established the "Reichman Reservists" group, coordinated hundreds of inquiries from students serving on all fronts, and met with the university president to reflect the real needs that emerged from the field.',
        actions: 'What We\'ll Do:',
        items: [
          'Student summaries and lecturer updates with personal attention',
          'Personal mentoring for track members and academic assistance',
          'Connection to psychological care and processing',
          'Direct and accessible contact with deans'
        ],
        color: 'from-blue-500 via-blue-600 to-blue-700'
      },
      {
        id: 'fun',
        title: 'Fun and Campus Atmosphere',
        subtitle: 'Reichman students don\'t need a reason to party – we simply deserve to enjoy.',
        content: 'We\'ll bring back the legendary atmosphere of "The Interdisciplinary" with parties that will remind you why you\'re here (and it\'s not just for the degree...). Performances, events, bonding activities, fairs and festivals that will connect students to the amazing and diverse community.',
        actions: 'What We\'ll Do:',
        items: [
          'Performances and bonding events',
          'Festivals and fairs',
          'Drive-in movie screenings',
          'Food festivals',
          'Peak events throughout the academic year'
        ],
        promises: 'Promises:',
        commitments: [
          'Fair treatment between supply and demand in ticket sales',
          'Events for all audiences: Israelis, internationals',
          'No queues and pressure',
          'Accessibility and availability for all students'
        ],
        color: 'from-purple-500 via-pink-500 to-purple-600'
      },
      {
        id: 'networking',
        title: 'Networking and Reichman Community',
        subtitle: 'Networking is one of the unique resources of Reichman University!',
        content: 'Our goal is to create a strong and cohesive community that cares for today\'s students and alumni. We will work to connect different students on campus, from different schools and different years.',
        actions: 'What We\'ll Do:',
        items: [
          'Think tanks and hosting meetings between schools',
          'Collaborations and connections between students',
          'Sense of belonging and friends from all departments',
          'Becoming the most united and strongest campus in Israel'
        ],
        color: 'from-cyan-500 via-blue-500 to-indigo-500'
      },
      {
        id: 'rights',
        title: 'Student Rights',
        subtitle: 'Delayed assignments? Rights violated? You have one clear address.',
        content: 'Araba has three years of experience as a representative and one year as academic coordinator – she knows the system, the solutions, and the way to get things done.',
        actions: 'What We\'ll Do:',
        items: [
          'Strengthening track representatives and coordinators',
          'Building an effective academic forum',
          'Quick and accurate response to every inquiry',
          'Handling delays and examining exceptions'
        ],
        color: 'from-green-500 via-emerald-500 to-green-600'
      },
      {
        id: 'smart-campus',
        title: 'Smart and Accessible Campus',
        subtitle: 'No more searching for an empty classroom!',
        content: 'We will launch a smart system that will reflect available classrooms and learning spaces in real time – throughout the year, and especially during exam periods.',
        actions: 'What We\'ll Do:',
        items: [
          'Smart system for available classrooms in real time',
          'Ability to book classrooms in advance',
          'Comprehensive study database with summaries from all schools',
          'Everything in one place, convenient and accessible'
        ],
        color: 'from-teal-500 via-cyan-500 to-blue-500'
      },
      {
        id: 'international',
        title: 'International School',
        subtitle: 'The International School should be involved in welfare and atmosphere, in community and spirit of the place.',
        content: 'We will establish a special position for a representative from the International School in the union management, whose purpose will be to reflect the student needs.',
        actions: 'What We\'ll Do:',
        items: [
          'Special representation in union management',
          'Real-time reflection of student needs',
          'Adapting events to all audiences',
          'Real-time handling of problems and demands'
        ],
        color: 'from-indigo-500 via-purple-500 to-pink-500'
      },
      {
        id: 'wellness',
        title: 'Campus Welfare',
        subtitle: 'The campus is our home – and we are here to make it better.',
        content: 'We will restore what worked, strengthen what is needed, and upgrade what is possible – from classrooms and libraries, through sports and recreation, to dormitories and daily life. And yes, the cafeteria will finally get an answer.',
        actions: 'What We\'ll Do:',
        items: [
          'Improving classrooms and libraries',
          'Upgrading sports and recreation',
          'Improving dormitories and daily life',
          'Solving the cafeteria problem'
        ],
        color: 'from-teal-500 via-emerald-500 to-green-500'
      },
      {
        id: 'entrepreneurship',
        title: 'Entrepreneurship and Support for Independent Students',
        subtitle: 'There are quite a few students who don\'t just study – but also build, create and lead.',
        content: 'We want to see them getting more space, more connections and more opportunities. We will issue calls for the independent community on campus to provide the services that the union consumes.',
        actions: 'What We\'ll Do:',
        items: [
          'Calls for the independent community',
          'Strengthening the framework for entrepreneurs and independents',
          'Open stage events for inspiration',
          'Exposure to collaborations between schools'
        ],
        color: 'from-orange-500 via-red-500 to-pink-500'
      },
      {
        id: 'career',
        title: 'Making the Day After Accessible',
        subtitle: 'The degree is an important foundation – but we know it doesn\'t end there.',
        content: 'We will expand collaborations with alumni, organizations and institutions that will accompany you beyond studies. We will create tracks, connections and content that will better prepare you for career.',
        actions: 'What We\'ll Do:',
        items: [
          'Expanding collaborations with alumni',
          'Connections to organizations and institutions',
          'Preparation for career and action',
          'Practical experience opportunities in industry'
        ],
        color: 'from-purple-500 via-indigo-500 to-blue-500'
      },
      {
        id: 'gender',
        title: 'Female Representation',
        subtitle: 'We will work to strengthen female representation at all levels of the union.',
        content: 'We will promote a policy of gender balance in all committees and union projects, and seriously address the unique needs of female students on campus.',
        actions: 'What We\'ll Do:',
        items: [
          'Strengthening female representation in union leadership',
          'Gender balance in committees and projects',
          'Addressing unique needs of female students',
          'Encouraging female leadership on campus'
        ],
        color: 'from-pink-500 via-purple-500 to-indigo-500'
      },
      {
        id: 'academic-staff',
        title: 'Working with Academic Staff',
        subtitle: 'Establishing regular work routines with university management and school deans.',
        content: 'Maintaining ongoing and professional dialogue between the union and management and a platform for promoting your interests, ensuring that changing needs receive accurate and quality response.',
        actions: 'What We\'ll Do:',
        items: [
          'Maintaining ongoing dialogue with management',
          'Platform for promoting student interests',
          'Accurate response to changing needs',
          'Recognition events for selected lecturers'
        ],
        color: 'from-blue-500 via-cyan-500 to-teal-500'
      },
      {
        id: 'budget',
        title: 'Budget Management and Transparency',
        subtitle: 'The union budget belongs to the students – and it should work for them.',
        content: 'We will re-examine where your money goes, and change the order of priorities. We will emphasize what is really important to you and will make a difference in the field.',
        actions: 'What We\'ll Do:',
        items: [
          'Re-examining budget expenditures',
          'Changing order of priorities',
          'Emphasis on what matters to students',
          'High transparency in financial management'
        ],
        color: 'from-green-500 via-emerald-500 to-teal-500'
      },
      {
        id: 'values',
        title: 'Values and Heritage of Reichman University',
        subtitle: 'A campus built on values, morality, Israeliness and Zionism.',
        content: 'We will establish events in collaboration with the hostages headquarters, marches and memorial events for the fallen and captives, initiate lectures by Prof. Uriel Reichman to tell the story of the place.',
        actions: 'What We\'ll Do:',
        items: [
          'Events in collaboration with hostages headquarters',
          'Marches and memorial events',
          'Lectures by Prof. Uriel Reichman',
          'Strengthening values and ideology'
        ],
        color: 'from-blue-600 via-indigo-600 to-purple-600'
      },
      {
        id: 'minorities',
        title: 'Minority Representation',
        subtitle: 'We will promote the voice and demands of minorities on campus.',
        content: 'In holidays, occasions, important dates, needs and requests. Our campus has room for everyone\'s needs!',
        actions: 'What We\'ll Do:',
        items: [
          'Promoting minority voices',
          'Addressing different holidays and occasions',
          'Response to unique needs',
          'Creating space for all audiences'
        ],
        color: 'from-purple-500 via-pink-500 to-red-500'
      },
      {
        id: 'environment',
        title: 'Protecting Green Environment',
        subtitle: 'We will work to make the union and campus greener and more accessible.',
        content: 'We will promote recycling initiatives and reducing the use of disposable items in all union events, hold green activities throughout the year.',
        actions: 'What We\'ll Do:',
        items: [
          'Recycling initiatives in all events',
          'Reducing use of disposable items',
          'Green activities throughout the year',
          'Encouraging environmental awareness'
        ],
        color: 'from-green-600 via-emerald-600 to-teal-600'
      }
    ],

    ctaTitle: 'Simply Shifting Up',
    ctaText: 'We don\'t make empty promises and don\'t speak in slogans. We come with experience, with a consolidated work plan and most importantly with a genuine desire to improve what needs to be improved.',
    ctaHighlight: 'This is your time and opportunity to make an impact, to choose people who know the system from the inside',
    ctaFinal: 'See you at the polls, next to the White Campaign ballot!',
    ctaButton: 'Let\'s Shift Up Together!',
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
        
        /* Mobile text contrast improvements */
        @media (max-width: 768px) {
          .platform-text {
            color: #1f2937 !important;
            font-weight: 600 !important;
          }
          
          .platform-subtitle {
            color: #111827 !important;
            font-weight: 700 !important;
          }
          
          .platform-content {
            color: #374151 !important;
            font-weight: 500 !important;
          }
          
          .platform-items {
            color: #1e3a8a !important;
            font-weight: 600 !important;
          }
          
          .platform-commitments {
            color: #14532d !important;
            font-weight: 600 !important;
          }
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
          ${language === 'he' ? 'left: 6px' : 'right: 6px'};
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
        aria-label={t.accessibility.skipToMain}
      >
        {t.accessibility.skipToMain}
      </a>

      {/* Accessibility Toolbar */}
      <div className={`fixed top-4 z-50 transition-all duration-300 ${language === 'he' ? 'left-4' : 'right-4'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setShowAccessibilityToolbar(!showAccessibilityToolbar)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg mb-2 focus-visible touch-manipulation"
          aria-label={showAccessibilityToolbar ? 'סגור כלי נגישות' : 'פתח כלי נגישות'}
          aria-expanded={showAccessibilityToolbar}
        >
          <Eye className="w-5 h-5" />
        </button>

        {/* Toolbar Content */}
        <div 
          className={`bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg border transition-all duration-300 transform ${
            showAccessibilityToolbar 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
          } max-w-[280px] sm:max-w-none`}
          role="toolbar"
          aria-label={t.accessibility.title}
          aria-hidden={!showAccessibilityToolbar}
        >
          <h3 className="text-xs md:text-sm font-bold mb-2 text-gray-800">{t.accessibility.title}</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 md:gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={increaseFontSize}
                aria-label={t.accessibility.increaseFont}
                className="p-2 min-w-[40px] touch-manipulation text-xs"
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
        className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 font-${fontSize} ${highContrast ? 'high-contrast' : ''}`} 
        dir={t.dir}
        lang={t.lang}
      >
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full animate-float blur-lg" style={{animationDelay: '4s'}}></div>
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
                  className="text-4xl sm:text-6xl md:text-8xl font-black text-white text-glow mb-4 leading-tight"
                >
                  {t.title}
                </h1>
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6" role="img" aria-label="סלוגן הקמפיין">
                  <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white rounded-full" aria-hidden="true"></div>
                  <Badge className="text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-3 bg-white/20 text-white border-white/30 glass-effect animate-pulse-glow">
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" aria-hidden="true" />
                    {t.slogan}
                  </Badge>
                  <div className="h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-white rounded-full" aria-hidden="true"></div>
                </div>
                <p className="text-lg sm:text-2xl md:text-3xl text-blue-100 font-medium px-4">
                  {t.university}
                </p>
              </header>

              {/* Main Message */}
              <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 mb-8 glass-effect mx-4 sm:mx-0" aria-labelledby="main-message">
                <h2 
                  id="main-message"
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {t.heroTitle} <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {language === 'he' ? 'בשבילכם' : 'for You'}
                  </span>
                </h2>
                <p className="text-base sm:text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
                  {t.heroSubtitle}
                </p>
              </section>

              {/* Action Buttons */}
              <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4" aria-label="ניווט עיקרי">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-white to-blue-50 text-blue-800 hover:from-blue-50 hover:to-white text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 animate-pulse-glow focus-visible w-full sm:w-auto"
                  onClick={() => scrollToSection('platform')}
                  aria-describedby="platform-description"
                >
                  <Sparkles className={`${language === 'he' ? 'ml-2 sm:ml-3' : 'mr-2 sm:mr-3'} h-5 w-5 sm:h-6 sm:w-6`} aria-hidden="true" />
                  {t.readPlatform}
                  <ArrowRight className={`${language === 'he' ? 'mr-2 sm:mr-3' : 'ml-2 sm:ml-3'} h-5 w-5 sm:h-6 sm:w-6`} aria-hidden="true" />
                </Button>
                <div id="platform-description" className="sr-only">עבור לקריאת המצע המפורט של הקמפיין</div>
              
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect text-white border-white/30 hover:bg-white/20 text-lg sm:text-xl px-8 sm:px-10 py-5 sm:py-6 rounded-2xl transition-all duration-300 focus-visible w-full sm:w-auto"
                  onClick={() => scrollToSection('team')}
                  aria-describedby="team-description"
                >
                  {t.meetTeam}
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
            className="py-20 bg-gradient-to-b from-white to-indigo-50" 
            data-animate
            aria-labelledby="team-title"
            tabIndex="-1"
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                <header className="text-center mb-16">
                  <h2 
                    id="team-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4 px-4"
                  >
                    {t.teamTitle}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                    {t.teamSubtitle}
                  </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto px-4">
                  {/* Raz */}
                  <article className="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl overflow-hidden">
                    <Card>
                      <CardHeader className="text-center p-6 sm:p-8">
                        <div className="relative mb-6">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse-glow" aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/raz-ben-haim.jpg" 
                                alt={`תמונה של ${t.razDetails.title}, מועמד ליו״ר הקמפיין הלבן`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center" style={{display: 'none'}}>
                                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl text-blue-800 mb-3">{t.razDetails.title}</CardTitle>
                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base sm:text-lg px-4 sm:px-6 py-2 rounded-full">
                          {t.chairman}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label={`פרטי ${t.razDetails.title}`}>
                          {t.razDetails.details.map((detail, index) => (
                            <div key={index} className="bg-white/90 p-3 sm:p-4 rounded-xl border border-blue-100" role="listitem">
                              <p className="font-semibold text-blue-900 text-sm sm:text-base">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>

                  {/* Araba */}
                  <article className="card-hover bg-gradient-to-br from-pink-50 to-purple-100 border-0 shadow-xl overflow-hidden">
                    <Card>
                      <CardHeader className="text-center p-6 sm:p-8">
                        <div className="relative mb-6">
                          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full animate-pulse-glow" aria-hidden="true"></div>
                            <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
                              <img 
                                src="/images/araba-benkin-sade.jpg" 
                                alt={`תמונה של ${t.arabaDetails.title}, מועמדת לסגנית יו״ר הקמפיין הלבן`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextElementSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center" style={{display: 'none'}}>
                                <Star className="w-12 h-12 sm:w-16 sm:h-16 text-pink-600" aria-hidden="true" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl text-pink-800 mb-3">{t.arabaDetails.title}</CardTitle>
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base sm:text-lg px-4 sm:px-6 py-2 rounded-full">
                          {t.viceChairman}
                        </Badge>
                      </CardHeader>
                      <CardContent className="p-6 sm:p-8 pt-0">
                        <div className="space-y-3" role="list" aria-label={`פרטי ${t.arabaDetails.title}`}>
                          {t.arabaDetails.details.map((detail, index) => (
                            <div key={index} className="bg-white/90 p-3 sm:p-4 rounded-xl border border-pink-100" role="listitem">
                              <p className="font-semibold text-pink-900 text-sm sm:text-base">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </article>
                </div>

                {/* Team Quote */}
                <aside className="mt-16 text-center px-4">
                  <blockquote className="bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient p-6 sm:p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                    <p className="text-lg sm:text-2xl md:text-3xl text-white font-bold leading-relaxed">
                      {t.teamQuote}
                    </p>
                  </blockquote>
                </aside>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section 
            id="vision" 
            className="py-20 bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-50" 
            data-animate
            aria-labelledby="vision-title"
            tabIndex="-1"
          >
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10'}`}>
                <header className="text-center mb-16">
                  <h2 
                    id="vision-title"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4 px-4"
                  >
                    {t.visionTitle}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                </header>

                <div className="bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/30 mx-4 sm:mx-0">
                  <p className="text-lg sm:text-2xl leading-relaxed text-center mb-12 text-gray-900 px-4 sm:px-0">
                    {t.visionText}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8" role="list" aria-label="עקרונות החזון">
                    {t.visionPoints.map((point, index) => (
                      <div key={index} className="text-center group" role="listitem">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 ${index === 0 ? 'bg-gradient-to-br from-green-500 to-green-700' : index === 1 ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-blue-500 to-blue-700'} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`} aria-hidden="true">
                          <span className="text-2xl sm:text-3xl text-white font-bold">
                            {index === 0 ? '✓' : index === 1 ? '✗' : '↗'}
                          </span>
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold mb-2 ${index === 0 ? 'text-green-900' : index === 1 ? 'text-red-900' : 'text-blue-900'}`}>
                          {point.title}
                        </h3>
                        <p className={`font-semibold text-sm sm:text-base ${index === 0 ? 'text-green-800' : index === 1 ? 'text-red-800' : 'text-blue-800'}`}>
                          {point.subtitle}
                        </p>
                      </div>
                    ))}
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
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-4 px-4"
                  >
                    {t.platformTitle}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full mb-6" aria-hidden="true"></div>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                    {t.platformSubtitle}
                  </p>
                </header>

                <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto px-4">
                  {t.sections.map((section, index) => (
                    <article key={section.id} className="card-hover overflow-hidden border-0 shadow-xl">
                      <Card>
                        <CardHeader className={`bg-gradient-to-r ${section.color} animate-gradient text-white p-6 sm:p-8`}>
                          <CardTitle className="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl">
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
                        <CardContent className="p-6 sm:p-8 bg-white border border-gray-100">{/* Changed from bg-white/95 to bg-white for stronger background */}
                          <p className="platform-subtitle text-base sm:text-lg mb-4 sm:mb-6 text-gray-900 leading-relaxed font-semibold">
                            {section.subtitle}
                          </p>
                          {section.content && (
                            <p className="platform-content text-sm sm:text-base mb-4 sm:mb-6 text-gray-800 leading-relaxed font-medium">
                              {section.content}
                            </p>
                          )}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-900 mb-3 text-base sm:text-lg">{section.actions}</h4>
                            <ul className="space-y-2" role="list">
                              {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3 text-sm sm:text-base platform-items text-blue-900 font-semibold" role="listitem">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {section.commitments && (
                            <div className="mt-4 sm:mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl border-l-4 border-green-500">
                              <h4 className="font-bold text-green-900 mb-3 text-base sm:text-lg">{section.promises}</h4>
                              <ul className="space-y-2" role="list">
                                {section.commitments.map((commitment, commitmentIndex) => (
                                  <li key={commitmentIndex} className="flex items-start gap-3 text-sm sm:text-base platform-commitments text-green-900 font-semibold" role="listitem">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                                    <span>{commitment}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section 
            className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 animate-gradient relative overflow-hidden"
            aria-labelledby="cta-title"
          >
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 
                  id="cta-title"
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 sm:mb-8 text-glow"
                >
                  {language === 'he' ? 'פשוט ' : 'Simply '}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {language === 'he' ? 'מעלים הילוך' : 'Shifting Up'}
                  </span>
                </h2>
            
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8 glass-effect">
                  <p className="text-base sm:text-xl md:text-2xl text-blue-100 leading-relaxed mb-4 sm:mb-6">
                    {t.ctaText}
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                    <p className="text-base sm:text-xl text-white font-semibold">
                      {t.ctaHighlight}
                    </p>
                  </div>
                  
                  <div className="bg-white/20 p-6 sm:p-8 rounded-2xl border border-white/30">
                    <p className="text-xl sm:text-3xl md:text-4xl font-black text-white animate-pulse-glow">
                      {t.ctaFinal}
                    </p>
                  </div>
                </div>

                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-orange-900 hover:from-yellow-300 hover:to-orange-400 text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 font-bold focus-visible w-full sm:w-auto"
                  aria-label="קריאה לפעולה - בואו נעלה הילוך יחד"
                >
                  <Plus className={`${language === 'he' ? 'ml-3' : 'mr-3'} h-6 w-6`} aria-hidden="true" />
                  {t.ctaButton}
                  <ArrowRight className={`${language === 'he' ? 'mr-3' : 'ml-3'} h-6 w-6`} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer 
          className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white py-8 sm:py-12"
          role="contentinfo"
          aria-label="מידע על הקמפיין"
        >
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {t.title}
              </h3>
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6" aria-hidden="true">
                <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gray-500"></div>
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  {t.slogan}
                </Badge>
                <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gray-500"></div>
              </div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-base sm:text-lg px-4">{t.university}</p>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
                {t.footerText}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 