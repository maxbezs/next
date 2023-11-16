import Breadcrumbs from "@/app/components/Breadcrumbs";
import H1 from "@/app/components/H1";
import Section from "@/app/components/Section";
import Sidebar from "@/app/components/Sidebar";

const FoodAndBeverages = () => {
  const baseHref = "/qwerty/hospitality/food-and-beverages/";

  const getRandomParagraph = (scope) => {
    const randomCategory = scope[Math.floor(Math.random() * scope.length)];
    return randomCategory.paragraph[
      Math.floor(Math.random() * randomCategory.paragraph.length)
    ];
  };

  const restaurants = [
    {
      scope: "Restaurants",
      heading: "Italian Trattoria",
      paragraph: [
        "Increase sales by 20-30% today with online ordering and delivery!",
        "Increase table turnover by 15% today with an efficient online reservation system!",
        "Increase online visibility by 30% today with targeted social media advertising and SEO optimization!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}italian-trattoria`,
    },
    {
      scope: "Restaurants",
      heading: "Sushi Restaurant",
      paragraph: [
        "Increase customer engagement by 20-40% today with a strong social media presence!",
        "Boost special event bookings by 20% today with interactive digital marketing campaigns!",
        "Elevate customer satisfaction ratings by 25% today with real-time feedback and review management systems!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}sushi-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "Steakhouse",
      paragraph: [
        " Increase customer return rate by 20% today with an engaging digital loyalty program!",
        " Enhance profit margins by 10% today with upselling through a sophisticated online menu!",
        " Boost weekday revenues by 20% today with digital happy hour and special event promotions!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}steakhouse`,
    },
    {
      scope: "Restaurants",
      heading: "Vegan Restaurant",
      paragraph: [
        "Increase average spend per order by 10-15% today with digital menus and ordering systems!",
        "Grow online follower count by 30% today with engaging social media content and influencer collaborations!",
        "Grow catering orders by 35% today with an online catering booking and customization system!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}vegan-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "Seafood Restaurant",
      paragraph: [
        "Increase average per-customer spend by 18% today with a digital sommelier app suggesting wine pairings!",
        "Expand evening sales by 25% today with online promotions of exclusive dinner specials!",
        "Increase local traffic by 15-25% today with effective local SEO and geo-targeted advertising!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}seafood-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "Mexican Restaurant",
      paragraph: [
        "Boost margarita and appetizer sales by 25% today with targeted happy hour promotions!",
        "Increase group bookings by 30% with customizable party menus and online reservation systems!",
        "Enhance online reviews by 20% today with engaging customer feedback tools and responsive service!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}mexican-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "French Bistro",
      paragraph: [
        "Increase patronage during off-peak hours by 15% with exclusive brunch specials!",
        "Grow wine sales by 20% with a digital wine pairing guide and sommelier consultations!",
        "Boost customer loyalty by 25% with a frequent diner program and special member events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}french-bistro`,
    },
    {
      scope: "Restaurants",
      heading: "Fast Food Joint",
      paragraph: [
        "Accelerate drive-thru sales by 20% with a streamlined ordering app!",
        "Increase customer retention by 30% with digital loyalty rewards and mobile order-ahead options!",
        "Enhance brand recognition by 25% with aggressive social media marketing and influencer partnerships!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}fast-food-joint`,
    },
    {
      scope: "Restaurants",
      heading: "Indian Cuisine Restaurant",
      paragraph: [
        "Boost dine-in traffic by 20% today with an authentic street food themed night!",
        "Increase online orders by 25% with a user-friendly ordering app featuring popular dishes!",
        "Enhance social media engagement by 30% with interactive cooking classes and recipe sharing!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}indian-cuisine`,
    },
    {
      scope: "Restaurants",
      heading: "Gourmet Burger Restaurant",
      paragraph: [
        "Increase sales of signature burgers by 20% with limited-time offers and meal combos!",
        "Boost customer loyalty by 25% with an interactive burger customization app!",
        "Grow social media following by 30% with viral burger challenge campaigns and influencer partnerships!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}gourmet-burger-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "Grill Restaurant",
      paragraph: [
        "Enhance lunchtime sales by 20% with quick-serve combo meals and online pre-order options!",
        "Increase event catering requests by 25% with a streamlined online booking system!",
        "Boost online visibility by 30% with engaging cultural content and authentic recipe blogs!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}grill-restaurant`,
    },
    {
      scope: "Restaurants",
      heading: "Chinese Dim Sum Restaurant",
      paragraph: [
        "Attract more weekend diners by 20% with special dim sum brunch offers!",
        "Increase takeaway sales by 25% with a quick-order mobile app featuring popular dim sum selections!",
        "Enhance customer interaction by 30% with live cooking demonstrations and cultural workshops!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}chinese-dim-sum`,
    },
    {
      scope: "Restaurants",
      heading: "Pizzeria",
      paragraph: [
        "Increase takeout orders by 20% with a 'build your own pizza' online feature!",
        "Boost weekday sales by 25% with lunch special deals and combo offers!",
        "Enhance social media engagement by 30% with pizza-making contests and customer photo shares!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}pizzeria`,
    },
    {
      scope: "Restaurants",
      heading: "Fine Dining Restaurant",
      paragraph: [
        "Attract gourmet enthusiasts by offering exclusive tasting menus and chef's table experiences!",
        "Increase special occasion bookings by 25% with personalized dining options and luxury ambiance!",
        "Boost online prestige by 30% with high-quality visual content and behind-the-scenes culinary insights!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}fine-dining`,
    },
    {
      scope: "Restaurants",
      heading: "Food Truck",
      paragraph: [
        "Boost street sales by 20% with live cooking displays and quick meal deals!",
        "Increase social media following by 25% with location updates and daily specials!",
        "Enhance customer loyalty by 30% with a frequent diner program and exclusive offers for followers!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}food-truck`,
    },
  ];
  const bars = [
    {
      scope: "Bars",
      heading: "Craft Beer Pub",
      paragraph: [
        "Boost craft beer sales by 25% today with exclusive brew launches and tasting events!",
        "Increase social media engagement by 30% with interactive beer trivia and brewery tours!",
        "Grow loyal customer base by 20% with a membership program offering discounts and special perks!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}craft-beer-pub`,
    },
    {
      scope: "Bars",
      heading: "Cocktail Lounge",
      paragraph: [
        "Enhance cocktail sales by 20% with unique mixology classes and signature drink creations!",
        "Increase private event bookings by 30% with customizable drink packages and elegant ambiance!",
        "Boost social media presence by 25% with vibrant cocktail photography and guest mixologist features!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}cocktail-lounge`,
    },
    {
      scope: "Bars",
      heading: "Sports Bar",
      paragraph: [
        "Drive game day sales up by 30% with special promotions and live sports screenings!",
        "Enhance customer loyalty by 25% with a sports fan club and exclusive member benefits!",
        "Increase social interaction by 20% with fantasy league nights and sports trivia competitions!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}sports-bar`,
    },
    {
      scope: "Bars",
      heading: "Wine Bar",
      paragraph: [
        "Boost wine sales by 20% with sommelier-led tastings and exclusive vineyard partnerships!",
        "Increase customer engagement by 30% with wine pairing workshops and educational events!",
        "Grow online visibility by 25% with a sophisticated digital marketing strategy and online wine club!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}wine-bar`,
    },
    {
      scope: "Bars",
      heading: "Dive Bar",
      paragraph: [
        "Increase bar patronage by 20% with themed nights and live music events!",
        "Boost drink sales by 25% with happy hour specials and signature cocktail creations!",
        "Enhance community presence by 30% with local artist showcases and neighborhood events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}dive-bar`,
    },
    {
      scope: "Bars",
      heading: "Rooftop Bar",
      paragraph: [
        "Attract more customers by 25% with stunning cityscape views and exclusive rooftop parties!",
        "Increase social media buzz by 30% with photo-friendly decor and influencer collaborations!",
        "Enhance guest experience by 20% with premium service and VIP lounge areas!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}rooftop-bar`,
    },
    {
      scope: "Bars",
      heading: "Karaoke Bar",
      paragraph: [
        "Boost evening sales by 30% with karaoke contests and group party packages!",
        "Increase customer retention by 25% with loyalty rewards and weekly karaoke leagues!",
        "Enhance social engagement by 20% with live video streams and interactive song requests!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}karaoke-bar`,
    },
    {
      scope: "Bars",
      heading: "Jazz Bar",
      paragraph: [
        "Increase patronage by 20% with live jazz nights and exclusive performances!",
        "Enhance customer experience by 25% with a sophisticated ambiance and curated music playlists!",
        "Boost social media presence by 30% with behind-the-scenes peeks and artist spotlights!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}jazz-bar`,
    },
    {
      scope: "Bars",
      heading: "Beach Bar",
      paragraph: [
        "Boost sales by 25% with beachside cocktail specials and sunset happy hours!",
        "Increase customer engagement by 30% with beach games and live DJ sets!",
        "Enhance online visibility by 20% with vibrant social media content and influencer beach parties!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}beach-bar`,
    },
    {
      scope: "Bars",
      heading: "Whiskey Bar",
      paragraph: [
        "Increase whiskey sales by 20% with tasting events and rare whiskey showcases!",
        "Boost customer knowledge by 25% with whiskey education classes and expert talks!",
        "Enhance social media engagement by 30% with whiskey pairing guides and exclusive member events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}whiskey-bar`,
    },
    {
      scope: "Bars",
      heading: "Ice Bar",
      paragraph: [
        "Attract more visitors by 20% with unique ice sculptures and themed ice events!",
        "Increase drink sales by 30% with signature frozen cocktails and cool happy hour deals!",
        "Enhance brand image by 25% with visually stunning decor and immersive experiences!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}ice-bar`,
    },
    {
      scope: "Bars",
      heading: "Piano Bar",
      paragraph: [
        "Boost evening sales by 20% with live piano performances and sing-along nights!",
        "Increase customer loyalty by 25% with a sophisticated music lounge and exclusive events!",
        "Enhance online presence by 30% with live streaming of performances and online music requests!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}piano-bar`,
    },
    {
      scope: "Bars",
      heading: "Gastro Pub",
      paragraph: [
        "Increase meal sales by 25% with gourmet pub fare and craft beer pairings!",
        "Boost customer satisfaction by 20% with seasonal menus and farm-to-table ingredients!",
        "Enhance social media engagement by 30% with foodie photography and chef interviews!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}gastropub`,
    },
    {
      scope: "Bars",
      heading: "Pop-up Bar",
      paragraph: [
        "Attract a diverse crowd by 20% with ever-changing themes and unique locations!",
        "Boost drink and food sales by 25% with limited-time menus and exclusive offers!",
        "Increase social media buzz by 30% with viral marketing campaigns and sneak peeks of upcoming themes!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}pop-up-bar`,
    },
  ];
  const cafes = [
    {
      scope: "Cafes",
      heading: "Artisan Coffee Shop",
      paragraph: [
        "Increase customer dwell time by 20% today with cozy decor and free Wi-Fi access!",
        "Boost coffee bean sales by 15% today with online ordering and subscription services!",
        "Enhance social media presence by 30% today with interactive coffee workshops and latte art competitions!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}artisan-coffee-shop`,
    },
    {
      scope: "Cafes",
      heading: "Neighborhood Bakery Cafe",
      paragraph: [
        "Increase foot traffic by 25% today with fresh daily specials and loyalty discounts!",
        "Boost online reviews by 20% today with user-friendly mobile ordering and quick delivery services!",
        "Enhance community engagement by 30% today with local events and partnerships!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}neighborhood-bakery-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Tea House",
      paragraph: [
        "Expand your customer base by 20% today with diverse tea selections and cultural events!",
        "Increase average spend per visit by 15% today with gourmet pastries and tea pairing menus!",
        "Grow online visibility by 25% today with interactive social media campaigns and influencer collaborations!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}tea-house`,
    },
    {
      scope: "Cafes",
      heading: "Vegan Café",
      paragraph: [
        "Increase sales of plant-based products by 20% today with innovative menu items and specials!",
        "Boost social media engagement by 25% today with vegan cooking classes and sustainability initiatives!",
        "Enhance customer loyalty by 30% today with a rewards program and exclusive offers!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}vegan-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Bookstore Café",
      paragraph: [
        "Attract more readers by 20% today with book club meetings and author events!",
        "Increase café sales by 15% today with themed menus and special discounts for book purchases!",
        "Grow online community by 30% today with a virtual book club and interactive social media content!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}bookstore-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Dessert Café",
      paragraph: [
        "Boost dessert sales by 25% today with seasonal specialties and custom cake orders!",
        "Increase foot traffic by 20% today with dessert making workshops and kids' baking classes!",
        "Enhance your online presence by 30% today with mouth-watering photography and dessert recipe blogs!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}dessert-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Internet Café",
      paragraph: [
        "Increase customer retention by 20% today with high-speed internet and gaming events!",
        "Boost beverage and snack sales by 15% today with combo deals and loyalty programs!",
        "Enhance online reviews by 25% today with customer satisfaction surveys and responsive service!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}internet-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Organic Juice Bar",
      paragraph: [
        "Grow product range sales by 20% today with fresh, organic juice cleanses and health-focused beverages!",
        "Increase social media engagement by 25% today with wellness workshops and influencer partnerships!",
        "Boost in-store traffic by 30% today with a loyalty program and referral incentives!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}organic-juice-bar`,
    },
    {
      scope: "Cafes",
      heading: "Gourmet Coffee Bar",
      paragraph: [
        "Increase artisan coffee sales by 20% today with exclusive bean selections and brewing techniques!",
        "Boost customer loyalty by 30% today with a gourmet coffee club and tasting events!",
        "Enhance brand prestige by 25% today with premium decor and unique coffee experiences!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}gourmet-coffee-bar`,
    },
    {
      scope: "Cafes",
      heading: "Health and Wellness Café",
      paragraph: [
        "Increase sales of healthy options by 20% today with organic and superfood menu items!",
        "Boost community engagement by 25% today with wellness workshops and health-focused events!",
        "Grow online influence by 30% today with a strong social media presence focused on health and wellness!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}health-wellness-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Retro Style Café",
      paragraph: [
        "Attract more customers by 20% today with nostalgic decor and classic menu items!",
        "Increase social media buzz by 25% today with retro-themed events and photo opportunities!",
        "Boost customer loyalty by 30% today with a nostalgic loyalty program and memorabilia!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}retro-style-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Student Study Café",
      paragraph: [
        "Increase foot traffic by 25% today with study-friendly amenities and student discounts!",
        "Boost sales during off-peak hours by 20% today with group study deals and quiet zones!",
        "Enhance online engagement by 30% today with educational workshops and academic events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}student-study-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Themed Café",
      paragraph: [
        "Attract niche customers by 20% today with a unique and immersive theme experience!",
        "Boost social media presence by 30% today with themed events and Instagrammable spots!",
        "Increase customer retention by 25% today with theme-related merchandise and loyalty programs!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}themed-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Luxury Café",
      paragraph: [
        "Increase sales of premium products by 20% today with exclusive offerings and high-end ambiance!",
        "Boost client retention by 25% today with personalized service and luxury loyalty programs!",
        "Enhance brand image by 30% today with sophisticated marketing and upscale events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}luxury-cafe`,
    },
    {
      scope: "Cafes",
      heading: "Local Community Café",
      paragraph: [
        "Boost community involvement by 20% today with local events and neighborhood partnerships!",
        "Increase customer loyalty by 25% today with community-focused programs and local product offerings!",
        "Enhance local SEO and online presence by 30% today with targeted local marketing and social media engagement!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}local-community-cafe`,
    },
  ];
  const lounges = [
    {
      scope: "Lounges",
      heading: "Cocktail Bar",
      paragraph: [
        "Boost cocktail sales by 25% today with creative mixology classes and social media sharing!",
        "Increase patron visits by 20% with live music nights and guest DJ events!",
        "Enhance online presence by 30% with influencer collaborations and immersive virtual tours!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}cocktail-bar`,
    },
    {
      scope: "Lounges",
      heading: "Wine Lounge",
      paragraph: [
        "Increase wine tasting reservations by 20% today with exclusive wine club memberships!",
        "Grow social media engagement by 25% with virtual sommelier sessions and wine pairing tips!",
        "Boost customer loyalty by 30% with personalized wine selection services and members-only events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}wine-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Jazz Lounge",
      paragraph: [
        "Enhance evening sales by 20% with themed jazz nights and special performance events!",
        "Grow patronage by 25% with a loyalty program for frequent visitors!",
        "Increase online visibility by 30% with live-streamed performances and interactive online events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}jazz-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Rooftop Lounge",
      paragraph: [
        "Boost visitor numbers by 20% with exclusive rooftop events and sunset happy hours!",
        "Increase social media buzz by 25% with picturesque settings and photo contests!",
        "Enhance customer experience by 30% with personalized service and VIP reservations!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}rooftop-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Beachfront Lounge",
      paragraph: [
        "Increase beach party bookings by 20% with unique seaside events and promotions!",
        "Boost social media presence by 30% with influencer beach parties and live broadcasts!",
        "Enhance customer loyalty by 25% with beach loyalty cards and exclusive discounts!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}beachfront-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Speakeasy",
      paragraph: [
        "Attract more customers by 20% with a secret menu and exclusive member events!",
        "Boost social engagement by 25% with themed nights and historical cocktail specials!",
        "Increase repeat visits by 30% with a members-only loyalty program and hidden perks!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}speakeasy`,
    },
    {
      scope: "Lounges",
      heading: "Hookah Lounge",
      paragraph: [
        "Boost evening sales by 20% with flavored hookah specials and group discounts!",
        "Enhance customer retention by 25% with a unique loyalty program for regular visitors!",
        "Increase social media following by 30% with themed nights and influencer collaborations!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}hookah-lounge`,
    },
    {
      scope: "Lounges",
      heading: "VIP Lounge",
      paragraph: [
        "Attract high-end clientele by offering 20% off on exclusive bottle service packages!",
        "Boost special event bookings by 25% with luxury amenities and private hosting options!",
        "Enhance online prestige by 30% with high-quality content showcasing VIP experiences!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}vip-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Karaoke Lounge",
      paragraph: [
        "Increase group bookings by 20% with private karaoke rooms and party packages!",
        "Enhance social media engagement by 25% with karaoke challenges and celebrity look-alike nights!",
        "Boost repeat visits by 30% with a loyalty program for frequent singers and groups!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}karaoke-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Sports Lounge",
      paragraph: [
        "Boost game day attendance by 20% with exclusive viewing parties and fan discounts!",
        "Increase social media buzz by 25% with fantasy league nights and live sports discussions!",
        "Enhance customer loyalty by 30% with rewards for game day regulars and team-themed events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}sports-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Retro Lounge",
      paragraph: [
        "Increase foot traffic by 20% with themed retro nights and vintage music playlists!",
        "Boost social media engagement by 30% with retro costume contests and throwback events!",
        "Enhance customer loyalty by 25% with a rewards program for regular patrons and special discounts!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}retro-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Library Lounge",
      paragraph: [
        "Attract more visitors by 20% with book club meetings and author signing events!",
        "Increase social media followers by 25% with literary themed nights and poetry readings!",
        "Boost customer retention by 30% with a cozy ambiance and special membership perks!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}library-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Art Lounge",
      paragraph: [
        "Boost visitor engagement by 20% with live art demonstrations and gallery nights!",
        "Increase art sales by 25% with exclusive exhibitions and artist meet-and-greets!",
        "Enhance online visibility by 30% with interactive art classes and social media showcases!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}art-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Electronic Music Lounge",
      paragraph: [
        "Increase nightly attendance by 20% with guest DJ performances and electronic music events!",
        "Boost social media presence by 25% with live-streamed shows and interactive online contests!",
        "Enhance customer experience by 30% with immersive sound and light shows and VIP services!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}electronic-music-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Garden Lounge",
      paragraph: [
        "Attract more guests by 20% with serene garden settings and nature-themed events!",
        "Boost social media engagement by 25% with garden workshops and plant care tips!",
        "Increase repeat visits by 30% with a peaceful atmosphere and loyalty discounts for regulars!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}garden-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Comedy Lounge",
      paragraph: [
        "Boost attendance by 20% with weekly stand-up comedy nights and open mic events!",
        "Increase online buzz by 25% with live-streamed performances and comedy challenges!",
        "Enhance patron loyalty by 30% with a comedy club membership and exclusive show access!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}comedy-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Tea Lounge",
      paragraph: [
        "Increase customer visits by 20% with specialty tea tastings and cultural tea ceremonies!",
        "Boost online engagement by 25% with interactive tea blending workshops and social media content!",
        "Enhance repeat business by 30% with a tea lover's loyalty program and seasonal tea offerings!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}tea-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Latin Lounge",
      paragraph: [
        "Attract a vibrant crowd by 20% with Latin dance nights and live music events!",
        "Increase social media presence by 30% with dance workshops and cultural celebrations!",
        "Boost customer loyalty by 25% with Latin-themed drink specials and member-exclusive events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}latin-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Chill-out Lounge",
      paragraph: [
        "Increase relaxation seekers by 20% with ambient music nights and stress-free zones!",
        "Boost social media reach by 25% with mindfulness workshops and relaxation tips!",
        "Enhance customer retention by 30% with a calm atmosphere and loyalty relaxation packages!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}chill-out-lounge`,
    },
    {
      scope: "Lounges",
      heading: "Ice Lounge",
      paragraph: [
        "Attract adventurous guests by 20% with unique ice bar experiences and cool events!",
        "Boost social media interaction by 25% with chilly photo ops and frosty drink specials!",
        "Increase repeat visits by 30% with exclusive memberships and ice-themed events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}ice-lounge`,
    },
  ];
  const fastFood = [
    {
      scope: "Fast Food",
      heading: "Burger Joint",
      paragraph: [
        "Maximize combo meal sales by 30% today with catchy digital signage and app-based ordering!",
        "Increase drive-thru efficiency by 20% today with an optimized ordering system!",
        "Boost online presence by 25% today with engaging social media campaigns and interactive contests!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}burger-joint`,
    },
    {
      scope: "Fast Food",
      heading: "Fried Chicken Outlet",
      paragraph: [
        "Elevate meal deal popularity by 35% today with limited-time offers and family-size specials!",
        "Increase customer retention by 20% today with a loyalty rewards program and app discounts!",
        "Grow brand recognition by 30% today with viral marketing campaigns and influencer endorsements!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}fried-chicken-outlet`,
    },
    {
      scope: "Fast Food",
      heading: "Pizza Takeaway",
      paragraph: [
        "Boost late-night sales by 25% today with special after-hours deals and online ordering!",
        "Increase lunchtime orders by 20% with quick meal combos and business lunch specials!",
        "Enhance online engagement by 30% today with interactive pizza customization apps!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}pizza-takeaway`,
    },
    {
      scope: "Fast Food",
      heading: "Taco Stand",
      paragraph: [
        "Increase foot traffic by 20% with vibrant street signage and speedy service!",
        "Boost online sales by 30% with an efficient ordering app and delivery partnerships!",
        "Grow social media following by 25% with tasty visuals and customer engagement campaigns!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}taco-stand`,
    },
    {
      scope: "Fast Food",
      heading: "Sandwich Shop",
      paragraph: [
        "Maximize lunch rush sales by 20% with express line options and pre-order apps!",
        "Enhance customer loyalty by 25% with a sandwich loyalty card and frequent buyer rewards!",
        "Increase online visibility by 30% with a dynamic social media strategy and engaging content!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}sandwich-shop`,
    },
    {
      scope: "Fast Food",
      heading: "Fish and Chips Shop",
      paragraph: [
        "Boost sales by 20% with online ordering and family meal deals!",
        "Increase local popularity by 25% with community engagement and special local offers!",
        "Enhance brand presence by 30% with a focused online marketing strategy and customer reviews!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}fish-and-chips-shop`,
    },
    {
      scope: "Fast Food",
      heading: "Donut Shop",
      paragraph: [
        "Increase morning rush sales by 30% with fresh-baked specials and coffee combos!",
        "Boost brand loyalty by 25% with a 'donut of the month' club and exclusive member discounts!",
        "Expand social media reach by 35% with engaging visuals and interactive donut design contests!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}donut-shop`,
    },
    {
      scope: "Fast Food",
      heading: "Ice Cream Parlor",
      paragraph: [
        "Enhance summer sales by 40% with new flavors and sundae specials!",
        "Grow family visits by 30% with interactive topping bars and family discount days!",
        "Increase social media engagement by 25% with photo contests and influencer collaborations!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}ice-cream-parlor`,
    },
    {
      scope: "Fast Food",
      heading: "Pretzel Kiosk",
      paragraph: [
        "Boost mall sales by 20% with scent marketing and quick grab-and-go options!",
        "Increase repeat customers by 25% with loyalty punch cards and special offers!",
        "Enhance online presence by 30% with targeted local advertising and social media campaigns!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}pretzel-kiosk`,
    },
    {
      scope: "Fast Food",
      heading: "Bagel Store",
      paragraph: [
        "Maximize breakfast crowd sales by 25% with bagel and coffee combos!",
        "Increase catering orders by 20% with online ordering systems and business lunch packages!",
        "Grow social media following by 30% with engaging content and community-driven events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}bagel-store`,
    },
    {
      scope: "Fast Food",
      heading: "Smoothie and Juice Bar",
      paragraph: [
        "Boost health-conscious customer sales by 30% with new wellness blends and loyalty programs!",
        "Increase foot traffic by 20% with quick-service options and mobile pre-ordering!",
        "Enhance online engagement by 25% with interactive flavor polls and health tips!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}smoothie-juice-bar`,
    },
    {
      scope: "Fast Food",
      heading: "Hot Dog Stand",
      paragraph: [
        "Increase lunchtime sales by 20% with special hot dog combos and quick service!",
        "Boost event sales by 25% with catering options for parties and events!",
        "Grow online visibility by 30% with strategic local marketing and engaging social media content!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}hot-dog-stand`,
    },
  ];
  const catering = [
    {
      scope: "Catering",
      heading: "Wedding Catering",
      paragraph: [
        "Increase booking rates by 20% today with customizable wedding menu options!",
        "Enhance client satisfaction by 25% today with professional event planning services!",
        "Boost social media presence by 30% today with stunning wedding catering photos and testimonials!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}wedding-catering`,
    },
    {
      scope: "Catering",
      heading: "Corporate Event Catering",
      paragraph: [
        "Increase efficiency by 15% today with seamless online ordering for corporate events!",
        "Enhance brand reputation by 20% today with high-quality, sustainable catering options!",
        "Boost client retention by 25% today with customizable menus for diverse corporate needs!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}corporate-event-catering`,
    },
    {
      scope: "Catering",
      heading: "Birthday Party Catering",
      paragraph: [
        "Attract more clients by 20% today with creative and thematic party menus!",
        "Increase customer loyalty by 25% today with personalized catering services!",
        "Enhance online visibility by 30% today with interactive social media campaigns!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}birthday-party-catering`,
    },
    {
      scope: "Catering",
      heading: "Buffet Catering",
      paragraph: [
        "Boost customer engagement by 20% today with diverse and inclusive buffet options!",
        "Enhance customer experience by 25% today with live cooking stations and custom food bars!",
        "Increase market reach by 30% today with targeted advertising and strategic partnerships!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}buffet-catering`,
    },
    {
      scope: "Catering",
      heading: "BBQ Catering",
      paragraph: [
        "Increase event bookings by 20% today with unique BBQ themes and setups!",
        "Boost customer satisfaction by 25% today with a variety of meat and vegetarian options!",
        "Enhance brand recognition by 30% today with aggressive social media marketing!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}bbq-catering`,
    },
    {
      scope: "Catering",
      heading: "Cocktail Party Catering",
      paragraph: [
        "Boost event bookings by 25% today with innovative cocktail menus and mixology classes!",
        "Enhance guest experience by 20% today with personalized cocktail options and themed bars!",
        "Increase online engagement by 30% today with vibrant social media content featuring cocktail creations!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}cocktail-party-catering`,
    },
    {
      scope: "Catering",
      heading: "Private Chef Services",
      paragraph: [
        "Attract more clients by 20% today with exclusive private dining experiences!",
        "Enhance customer loyalty by 25% today with personalized menu planning and cooking classes!",
        "Boost online visibility by 30% today with behind-the-scenes content and chef's stories!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}private-chef-services`,
    },
    {
      scope: "Catering",
      heading: "Food Truck Catering",
      paragraph: [
        "Increase event bookings by 20% today with unique and versatile food truck options!",
        "Boost social media presence by 25% today with live event coverage and customer interaction!",
        "Enhance brand recognition by 30% today with creative branding and community involvement!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}food-truck-catering`,
    },
    {
      scope: "Catering",
      heading: "Gourmet Catering",
      paragraph: [
        "Attract high-end clients by 20% today with luxury gourmet dishes and exclusive services!",
        "Increase market presence by 25% today with signature dishes and renowned chef collaborations!",
        "Enhance online reviews by 30% today with exceptional service and customer testimonial campaigns!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}gourmet-catering`,
    },
    {
      scope: "Catering",
      heading: "Vegan Catering",
      paragraph: [
        "Boost market share by 20% today with creative and diverse vegan menu options!",
        "Enhance client satisfaction by 25% today with organic and locally sourced ingredients!",
        "Increase social media engagement by 30% today with vegan cooking workshops and recipe sharing!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}vegan-catering`,
    },
    {
      scope: "Catering",
      heading: "Seafood Catering",
      paragraph: [
        "Increase bookings by 20% today with fresh and sustainable seafood options!",
        "Enhance customer experience by 25% today with interactive seafood stations and chef demonstrations!",
        "Boost online presence by 30% today with engaging content and sea-to-table stories!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}seafood-catering`,
    },
    {
      scope: "Catering",
      heading: "Festival Catering",
      paragraph: [
        "Attract more festival goers by 20% today with a variety of global cuisine options!",
        "Increase customer retention by 25% today with interactive food booths and live cooking shows!",
        "Enhance social media buzz by 30% today with festival highlights and customer engagement strategies!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}festival-catering`,
    },
    {
      scope: "Catering",
      heading: "International Cuisine Catering",
      paragraph: [
        "Boost client interest by 20% today with a diverse range of international culinary specialties!",
        "Enhance event appeal by 25% today with culturally themed menus and decor!",
        "Increase online interactions by 30% today with stories and posts about international food traditions!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}international-cuisine-catering`,
    },
    {
      scope: "Catering",
      heading: "Themed Event Catering",
      paragraph: [
        "Attract niche markets by 20% today with specialized themed event catering!",
        "Boost customer excitement by 25% today with unique decor and menu matching the theme!",
        "Enhance online visibility by 30% today with engaging posts and photos of themed events!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}themed-event-catering`,
    },
    {
      scope: "Catering",
      heading: "Custom Catering",
      paragraph: [
        "Increase customer satisfaction by 20% today with fully customizable catering options!",
        "Enhance brand loyalty by 25% today with tailored menus to suit every client's need!",
        "Boost market reach by 30% today with personalized and versatile catering services!",
      ],
      buttonText: "Read Article",
      href: `${baseHref}custom-catering`,
    },
  ];
  const sections = [
    {
      title: "Restaurants",
      subSections: [
        { title: "Italian Trattoria", href: `${baseHref}italian-trattoria` },
        { title: "Sushi Restaurant", href: `${baseHref}sushi-restaurant` },
        { title: "Steakhouse", href: `${baseHref}steakhouse` },
        { title: "Vegan Restaurant", href: `${baseHref}vegan-restaurant` },
        { title: "Seafood Restaurant", href: `${baseHref}seafood-restaurant` },
        { title: "Mexican Restaurant", href: `${baseHref}mexican-restaurant` },
        { title: "French Bistro", href: `${baseHref}french-bistro` },
        { title: "Fast Food Joint", href: `${baseHref}fast-food-joint` },
        {
          title: "Indian Cuisine Restaurant",
          href: `${baseHref}indian-cuisine-restaurant`,
        },
        {
          title: "Gourmet Burger Restaurant",
          href: `${baseHref}gourmet-burger-restaurant`,
        },
        { title: "Grill Restaurant", href: `${baseHref}grill-restaurant` },
        {
          title: "Chinese Dim Sum Restaurant",
          href: `${baseHref}chinese-dim-sum-restaurant`,
        },
        { title: "Pizzeria", href: `${baseHref}pizzeria` },
        {
          title: "Fine Dining Restaurant",
          href: `${baseHref}fine-dining-restaurant`,
        },
        { title: "Food Truck", href: `${baseHref}food-truck` },
      ],
    },
    {
      title: "Bars",
      subSections: [
        { title: "Craft Beer Pub", href: `${baseHref}craft-beer-pub` },
        { title: "Cocktail Lounge", href: `${baseHref}cocktail-lounge` },
        { title: "Sports Bar", href: `${baseHref}sports-bar` },
        { title: "Wine Bar", href: `${baseHref}wine-bar` },
        { title: "Dive Bar", href: `${baseHref}dive-bar` },
        { title: "Rooftop Bar", href: `${baseHref}rooftop-bar` },
        { title: "Karaoke Bar", href: `${baseHref}karaoke-bar` },
        { title: "Jazz Bar", href: `${baseHref}jazz-bar` },
        { title: "Beach Bar", href: `${baseHref}beach-bar` },
        { title: "Whiskey Bar", href: `${baseHref}whiskey-bar` },
        { title: "Ice Bar", href: `${baseHref}ice-bar` },
        { title: "Piano Bar", href: `${baseHref}piano-bar` },
        { title: "Gastro Pub", href: `${baseHref}gastro-pub` },
        { title: "Pop-up Bar", href: `${baseHref}pop-up-bar` },
      ],
    },
    {
      title: "Cafes",
      subSections: [
        {
          title: "Artisan Coffee Shop",
          href: `${baseHref}artisan-coffee-shop`,
        },
        {
          title: "Neighborhood Bakery Cafe",
          href: `${baseHref}neighborhood-bakery-cafe`,
        },
        { title: "Tea House", href: `${baseHref}tea-house` },
        { title: "Vegan Café", href: `${baseHref}vegan-cafe` },
        { title: "Bookstore Café", href: `${baseHref}bookstore-cafe` },
        { title: "Dessert Café", href: `${baseHref}dessert-cafe` },
        { title: "Internet Café", href: `${baseHref}internet-cafe` },
        { title: "Organic Juice Bar", href: `${baseHref}organic-juice-bar` },
        { title: "Gourmet Coffee Bar", href: `${baseHref}gourmet-coffee-bar` },
        {
          title: "Health and Wellness Café",
          href: `${baseHref}health-wellness-cafe`,
        },
        { title: "Retro Style Café", href: `${baseHref}retro-style-cafe` },
        { title: "Student Study Café", href: `${baseHref}student-study-cafe` },
        { title: "Themed Café", href: `${baseHref}themed-cafe` },
        { title: "Luxury Café", href: `${baseHref}luxury-cafe` },
        {
          title: "Local Community Café",
          href: `${baseHref}local-community-cafe`,
        },
      ],
    },
    {
      title: "Lounges",
      subSections: [
        { title: "Cocktail Bar", href: `${baseHref}cocktail-bar` },
        { title: "Wine Lounge", href: `${baseHref}wine-lounge` },
        { title: "Jazz Lounge", href: `${baseHref}jazz-lounge` },
        { title: "Rooftop Lounge", href: `${baseHref}rooftop-lounge` },
        { title: "Beachfront Lounge", href: `${baseHref}beachfront-lounge` },
        { title: "Speakeasy", href: `${baseHref}speakeasy` },
        { title: "Hookah Lounge", href: `${baseHref}hookah-lounge` },
        { title: "VIP Lounge", href: `${baseHref}vip-lounge` },
        { title: "Karaoke Lounge", href: `${baseHref}karaoke-lounge` },
        { title: "Sports Lounge", href: `${baseHref}sports-lounge` },
        { title: "Retro Lounge", href: `${baseHref}retro-lounge` },
        { title: "Library Lounge", href: `${baseHref}library-lounge` },
        { title: "Art Lounge", href: `${baseHref}art-lounge` },
        {
          title: "Electronic Music Lounge",
          href: `${baseHref}electronic-music-lounge`,
        },
        { title: "Garden Lounge", href: `${baseHref}garden-lounge` },
        { title: "Comedy Lounge", href: `${baseHref}comedy-lounge` },
        { title: "Tea Lounge", href: `${baseHref}tea-lounge` },
        { title: "Latin Lounge", href: `${baseHref}latin-lounge` },
        { title: "Chill-out Lounge", href: `${baseHref}chill-out-lounge` },
        { title: "Ice Lounge", href: `${baseHref}ice-lounge` },
      ],
    },
    {
      title: "Fast Food",
      subSections: [
        { title: "Burger Joint", href: `${baseHref}burger-joint` },
        {
          title: "Fried Chicken Outlet",
          href: `${baseHref}fried-chicken-outlet`,
        },
        { title: "Pizza Takeaway", href: `${baseHref}pizza-takeaway` },
        { title: "Taco Stand", href: `${baseHref}taco-stand` },
        { title: "Sandwich Shop", href: `${baseHref}sandwich-shop` },
        {
          title: "Fish and Chips Shop",
          href: `${baseHref}fish-and-chips-shop`,
        },
        { title: "Donut Shop", href: `${baseHref}donut-shop` },
        { title: "Ice Cream Parlor", href: `${baseHref}ice-cream-parlor` },
        { title: "Pretzel Kiosk", href: `${baseHref}pretzel-kiosk` },
        { title: "Bagel Store", href: `${baseHref}bagel-store` },
        {
          title: "Smoothie and Juice Bar",
          href: `${baseHref}smoothie-juice-bar`,
        },
        { title: "Hot Dog Stand", href: `${baseHref}hot-dog-stand` },
      ],
    },
    {
      title: "Catering",
      subSections: [
        { title: "Wedding Catering", href: `${baseHref}wedding-catering` },
        {
          title: "Corporate Event Catering",
          href: `${baseHref}corporate-event-catering`,
        },
        {
          title: "Birthday Party Catering",
          href: `${baseHref}birthday-party-catering`,
        },
        { title: "Buffet Catering", href: `${baseHref}buffet-catering` },
        { title: "BBQ Catering", href: `${baseHref}bbq-catering` },
        {
          title: "Cocktail Party Catering",
          href: `${baseHref}cocktail-party-catering`,
        },
        {
          title: "Private Chef Services",
          href: `${baseHref}private-chef-services`,
        },
        {
          title: "Food Truck Catering",
          href: `${baseHref}food-truck-catering`,
        },
        { title: "Gourmet Catering", href: `${baseHref}gourmet-catering` },
        { title: "Vegan Catering", href: `${baseHref}vegan-catering` },
        { title: "Seafood Catering", href: `${baseHref}seafood-catering` },
        { title: "Festival Catering", href: `${baseHref}festival-catering` },
        {
          title: "International Cuisine Catering",
          href: `${baseHref}international-cuisine-catering`,
        },
        {
          title: "Themed Event Catering",
          href: `${baseHref}themed-event-catering`,
        },
        { title: "Custom Catering", href: `${baseHref}custom-catering` },
      ],
    },
  ];

  return (
    <div className="w-10/12 mx-auto pt-16">
      <H1>Food & Beverages</H1>
      <Breadcrumbs />
      <div className="flex gap-6 pt-4">
        <div className="w-3/4">
          <Section
            title="Restaurants"
            items={restaurants}
            getRandomParagraph={getRandomParagraph}
          />
          <Section
            title="Bars"
            items={bars}
            getRandomParagraph={getRandomParagraph}
          />
          <Section
            title="Cafes"
            items={cafes}
            getRandomParagraph={getRandomParagraph}
          />
          <Section
            title="Lounges"
            items={lounges}
            getRandomParagraph={getRandomParagraph}
          />
          <Section
            title="Fast Food"
            items={fastFood}
            getRandomParagraph={getRandomParagraph}
          />
          <Section
            title="Catering"
            items={catering}
            getRandomParagraph={getRandomParagraph}
          />
        </div>
        <Sidebar sections={sections} />
      </div>
    </div>
  );
};

export default FoodAndBeverages;
