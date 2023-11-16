import H1 from "@/app/components/H1";
import Section from "@/app/components/Section";
import Sidebar from "@/app/components/Sidebar";

const FoodAndBeverages = () => {
  const baseHref = "/qwerty/hospitality/food-and-beverages/";

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
  ];

  const getRandomParagraph = (scope) => {
    const randomCategory = scope[Math.floor(Math.random() * scope.length)];
    return randomCategory.paragraph[
      Math.floor(Math.random() * randomCategory.paragraph.length)
    ];
  };

  return (
    <div className="w-10/12 mx-auto pt-16">
      <H1>Food & Beverages</H1>
      <div className=" flex h-fit w-full my-4">
        <nav data-slot="base" aria-label="Breadcrumbs">
          <ol
            data-slot="list"
            className="flex flex-wrap list-none rounded-small"
          >
            <li data-slot="base" className="flex items-center">
              <span
                data-slot="item"
                className="flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                tabIndex="0"
                role="link"
              >
                Home
              </span>
              <span
                data-slot="separator"
                aria-hidden="true"
                className="px-1 text-foreground/50"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </li>
            <li data-slot="base" className="flex items-center">
              <span
                data-slot="item"
                className="flex gap-1 items-center cursor-pointer whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-foreground/50 text-small hover:opacity-80 active:opacity-disabled transition-opacity no-underline"
                tabIndex="0"
                role="link"
              >
                Hospitality
              </span>
              <span
                data-slot="separator"
                aria-hidden="true"
                className="px-1 text-foreground/50"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="1em"
                  role="presentation"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="1em"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </li>
            <li data-slot="base" className="flex items-center">
              <span
                data-slot="item"
                data-current="true"
                className="flex gap-1 items-center whitespace-nowrap line-clamp-1 tap-highlight-transparent outline-none text-small no-underline cursor-default transition-opacity text-foreground font-bold"
                aria-disabled="true"
                role="link"
                aria-current="page"
              >
                Food & Beverages
              </span>
            </li>
          </ol>
        </nav>
      </div>{" "}
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
        </div>
        <Sidebar sections={sections} />
      </div>
    </div>
  );
};

export default FoodAndBeverages;
