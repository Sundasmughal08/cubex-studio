/* ==========================================================================
   CUBEX DESIGN STUDIO — DEMO WEBSITE INTERACTIVE ENGINE (demo.js)
   100% Original Studio Renders (26 Projects • 284 WebP Views)
   ========================================================================== */

const WHATSAPP_NUMBER = "923100400100";
const PORTFOLIO_PROJECTS = [
  {
    "id": "restaurant-rumi-s-cfae-multan",
    "slug": "rumi-s-cfae-multan",
    "category": "restaurant",
    "subType": "cafe",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Rumi's Cafe, Multan",
    "location": "Multan",
    "style": "Cafe & Fine Dining",
    "description": "A two-floor cafe and dining hall in Multan. It features a tall red wall with Rumi poetry, an indoor tree in the center with a round red marble counter, a black grand piano, comfortable sofa and chair seating, and warm hanging lights.",
    "highlights": [
      "Tall red wall design with Rumi poetry",
      "Center indoor tree with round marble counter",
      "Black grand piano and hanging ceiling lights",
      "Upper floor sitting area with metal railing",
      "Comfortable sofa booths and dining chairs",
      "Warm ceiling and wall lighting throughout"
    ],
    "cover": "assets/projects/restaurant/rumi-s-cfae-multan/scene-01-scene-10.webp",
    "scenes": [
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-01-scene-10.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-02-scene-11.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-03-scene-14-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-04-scene-16-2.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-05-scene-17-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-06-scene-18-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-07-scene-19-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-08-scene-1-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-09-scene-21-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-10-scene-22-1.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-11-scene-3.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-12-scene-4.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-13-scene-5.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-14-scene-7.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-15-scene-8.webp",
      "assets/projects/restaurant/rumi-s-cfae-multan/scene-16-scene-9.webp"
    ],
    "sceneCount": 16
  },
  {
    "id": "restaurant-chop-raya",
    "slug": "chop-raya",
    "category": "restaurant",
    "subType": "finedining",
    "categoryLabel": "Restaurants & Cafes",
    "title": "CHOP Steakhouse, Raya",
    "location": "Raya",
    "style": "Steakhouse & Dining",
    "description": "A fine dining steakhouse designed with a wooden box ceiling, round golden lights, a 3D black and gold wall design, green marble tables, wooden flooring, and soft armchairs.",
    "highlights": [
      "3D black and gold wall design with round brass plates",
      "Wooden ceiling with warm round globe lights",
      "Green marble round tables and wooden floor",
      "Soft velvet and patterned dining armchairs",
      "Indoor plant dividers between tables",
      "Lighted CHOP Prime Steakhouse wall sign"
    ],
    "cover": "assets/projects/restaurant/chop-raya/scene-01-scene-1-1.webp",
    "scenes": [
      "assets/projects/restaurant/chop-raya/scene-01-scene-1-1.webp",
      "assets/projects/restaurant/chop-raya/scene-02-scene-2-1.webp",
      "assets/projects/restaurant/chop-raya/scene-03-scene-4-1.webp",
      "assets/projects/restaurant/chop-raya/scene-04-scene-5-1.webp",
      "assets/projects/restaurant/chop-raya/scene-05-scene-7-1.webp"
    ],
    "sceneCount": 5
  },
  {
    "id": "restaurant-roasters",
    "slug": "roasters",
    "category": "restaurant",
    "subType": "cafe",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Roasters",
    "location": "Coffee & Dining",
    "style": "Cafe & Restaurant",
    "description": "A cafe and dining interior with dark wood ceiling work, maroon sofa seating, a marble reception counter with golden bars, patterned floor tiles, and a custom ROASTERS floor entrance.",
    "highlights": [
      "Marble reception desk with vertical golden bars",
      "ROASTERS name written in entrance floor tiles",
      "Maroon sofa booths and comfortable dining chairs",
      "Arched wall molding with warm wall lamps",
      "Dark wood ceiling with hidden strip lights",
      "Black and white patterned tile floor"
    ],
    "cover": "assets/projects/restaurant/roasters/scene-02-scene-11.webp",
    "scenes": [
      "assets/projects/restaurant/roasters/scene-01-scene-10-1.webp",
      "assets/projects/restaurant/roasters/scene-02-scene-11.webp",
      "assets/projects/restaurant/roasters/scene-03-scene-14-1.webp",
      "assets/projects/restaurant/roasters/scene-04-scene-16.webp",
      "assets/projects/restaurant/roasters/scene-05-scene-17.webp",
      "assets/projects/restaurant/roasters/scene-06-scene-18.webp",
      "assets/projects/restaurant/roasters/scene-07-scene-19.webp",
      "assets/projects/restaurant/roasters/scene-08-scene-1-2.webp",
      "assets/projects/restaurant/roasters/scene-09-scene-20.webp",
      "assets/projects/restaurant/roasters/scene-10-scene-25.webp",
      "assets/projects/restaurant/roasters/scene-11-scene-2-2.webp",
      "assets/projects/restaurant/roasters/scene-12-scene-3-1.webp",
      "assets/projects/restaurant/roasters/scene-13-scene-7-1.webp"
    ],
    "sceneCount": 13
  },
  {
    "id": "restaurant-alaska-rooftop",
    "slug": "alaska-rooftop",
    "category": "restaurant",
    "subType": "finedining",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Alaska Rooftop",
    "location": "Rooftop Dining",
    "style": "Open-Air Rooftop Lounge",
    "description": "An open-air night rooftop sitting area with wooden pergolas, white curtains, warm counter lights, black marble tables, cane chairs, and outdoor street-style lamps.",
    "highlights": [
      "Wooden rooftop pergolas with white curtains",
      "Stone service counters with warm bottom lights",
      "Black and gold marble dining tables",
      "Outdoor globe lamp posts along the boundary",
      "Cane and cushioned outdoor dining chairs",
      "Green plants with warm night lighting"
    ],
    "cover": "assets/projects/restaurant/alaska-rooftop/scene-01-scene-19-2.webp",
    "scenes": [
      "assets/projects/restaurant/alaska-rooftop/scene-01-scene-19-2.webp",
      "assets/projects/restaurant/alaska-rooftop/scene-02-scene-1-3.webp",
      "assets/projects/restaurant/alaska-rooftop/scene-03-scene-20-2.webp",
      "assets/projects/restaurant/alaska-rooftop/scene-04-scene-21-2.webp"
    ],
    "sceneCount": 4
  },
  {
    "id": "restaurant-burger-lab",
    "slug": "burger-lab",
    "category": "restaurant",
    "subType": "fastfood",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Burger Lab",
    "location": "Fast Food Branch",
    "style": "Fast Food Interior",
    "description": "A modern fast-food interior designed in dark red and industrial tones. It includes custom Burger Lab wall artwork, green sofa booths, high bar stools, and hanging ceiling lights.",
    "highlights": [
      "Custom Burger Lab wall graphics and neon signs",
      "Dark red ceiling beams and wall frames",
      "Green leather booth seating for families",
      "High counter tables with red metal stools",
      "Two-tone floor tiles and open dark ceiling",
      "Warm hanging lamps over every table"
    ],
    "cover": "assets/projects/restaurant/burger-lab/scene-02-scene-1.webp",
    "scenes": [
      "assets/projects/restaurant/burger-lab/scene-01-op-2.webp",
      "assets/projects/restaurant/burger-lab/scene-02-scene-1.webp",
      "assets/projects/restaurant/burger-lab/scene-03-scene-2.webp",
      "assets/projects/restaurant/burger-lab/scene-04-scene-3.webp",
      "assets/projects/restaurant/burger-lab/scene-05-scene-4.webp",
      "assets/projects/restaurant/burger-lab/scene-06-scene-5.webp",
      "assets/projects/restaurant/burger-lab/scene-07-scene-6.webp",
      "assets/projects/restaurant/burger-lab/scene-08-scene-7.webp",
      "assets/projects/restaurant/burger-lab/scene-09-scene-9-inpainting02.webp"
    ],
    "sceneCount": 9
  },
  {
    "id": "restaurant-karak-usa",
    "slug": "karak-usa",
    "category": "restaurant",
    "subType": "cafe",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Karak House",
    "location": "Shop 2 & Shop 3",
    "style": "Tea & Coffee Cafe",
    "description": "A tea and coffee cafe designed in two shop layouts (Shop 2 and Shop 3). It features a green patterned counter and ceiling border, a black brick wall with wooden shelves, a neon 'ended up at karak house' wall sign, cane chairs, and marble tables.",
    "highlights": [
      "Green carved pattern counter and ceiling border",
      "Glowing 'ended up at karak house' neon wall sign",
      "Black brick counter wall with warm wooden shelves",
      "Wooden cane-back chairs and white marble tables",
      "Yellow coffee machine and glass display counter",
      "Complete designs for both Shop 2 and Shop 3"
    ],
    "cover": "assets/projects/restaurant/karak-usa/scene-01-shop-2-scene-17.webp",
    "scenes": [
      "assets/projects/restaurant/karak-usa/scene-01-shop-2-scene-17.webp",
      "assets/projects/restaurant/karak-usa/scene-02-shop-2-scene-18.webp",
      "assets/projects/restaurant/karak-usa/scene-03-shop-2-scene-19.webp",
      "assets/projects/restaurant/karak-usa/scene-04-shop-2-scene-20.webp",
      "assets/projects/restaurant/karak-usa/scene-05-shop-2-scene-21.webp",
      "assets/projects/restaurant/karak-usa/scene-06-shop-2-scene-22.webp",
      "assets/projects/restaurant/karak-usa/scene-07-shop-2-scene-23.webp",
      "assets/projects/restaurant/karak-usa/scene-08-shop-2-scene-24.webp",
      "assets/projects/restaurant/karak-usa/scene-09-shop-2-scene-25.webp",
      "assets/projects/restaurant/karak-usa/scene-10-shop-2-scene-26.webp",
      "assets/projects/restaurant/karak-usa/scene-11-shop-2-scene-27.webp",
      "assets/projects/restaurant/karak-usa/scene-12-shop-3-scene-16-1.webp",
      "assets/projects/restaurant/karak-usa/scene-13-shop-3-scene-17.webp",
      "assets/projects/restaurant/karak-usa/scene-14-shop-3-scene-18.webp",
      "assets/projects/restaurant/karak-usa/scene-15-shop-3-scene-19.webp",
      "assets/projects/restaurant/karak-usa/scene-16-shop-3-scene-20.webp",
      "assets/projects/restaurant/karak-usa/scene-17-shop-3-scene-21.webp",
      "assets/projects/restaurant/karak-usa/scene-18-shop-3-scene-22.webp",
      "assets/projects/restaurant/karak-usa/scene-19-shop-3-scene-23.webp",
      "assets/projects/restaurant/karak-usa/scene-20-shop-3-scene-24.webp",
      "assets/projects/restaurant/karak-usa/scene-21-shop-3-scene-25.webp",
      "assets/projects/restaurant/karak-usa/scene-22-shop-3-scene-26.webp",
      "assets/projects/restaurant/karak-usa/scene-23-shop-3-scene-27.webp",
      "assets/projects/restaurant/karak-usa/scene-24-shop-3-scene-28.webp"
    ],
    "sceneCount": 24
  },
  {
    "id": "restaurant-kite-cafe-faislabad",
    "slug": "kite-cafe-faislabad",
    "category": "restaurant",
    "subType": "cafe",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Kite Cafe, Faisalabad",
    "location": "Faisalabad",
    "style": "Modern Coffee Cafe",
    "description": "A clean and bright cafe in Faisalabad with terracotta floor tiles, a white square-tiled coffee counter with an 'order here' sign, warm ceiling light coves, and wooden chairs.",
    "highlights": [
      "White tiled coffee counter with 'order here' sign",
      "Terracotta grid floor tiles across the hall",
      "Curved ceiling light design and open ducts",
      "Wooden dining chairs with soft cream seats",
      "Glass bakery counter and coffee bar setup",
      "Complete views of all sitting areas"
    ],
    "cover": "assets/projects/restaurant/kite-cafe-faislabad/scene-05-scene-14.webp",
    "scenes": [
      "assets/projects/restaurant/kite-cafe-faislabad/scene-01-scene-10.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-02-scene-11.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-03-scene-12.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-04-scene-13.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-05-scene-14.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-06-scene-15.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-07-scene-16.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-08-scene-17.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-09-scene-18.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-10-scene-19.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-11-scene-20.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-12-scene-21.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-13-scene-22.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-14-scene-23.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-15-scene-24.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-16-scene-25.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-17-scene-26.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-18-scene-27.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-19-scene-28.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-20-scene-29.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-21-scene-30.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-22-scene-31.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-23-scene-32.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-24-scene-33.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-25-scene-34.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-26-scene-35.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-27-scene-36-inpainting01.webp",
      "assets/projects/restaurant/kite-cafe-faislabad/scene-28-scene-37.webp"
    ],
    "sceneCount": 28
  },
  {
    "id": "restaurant-shahzad-tikka",
    "slug": "shahzad-tikka",
    "category": "restaurant",
    "subType": "finedining",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Shahzad Tikka",
    "location": "Family Restaurant",
    "style": "Traditional & Modern Dining",
    "description": "A family dining restaurant with warm stone-style wall arches, wooden wall panels, pillars wrapped in lighted geometric designs, cane chairs, marble tables, and hanging lanterns.",
    "highlights": [
      "Wall arches with wooden vertical panel inserts",
      "Pillars with lighted geometric jaali work",
      "Comfortable cane armchairs for dining",
      "White marble tables and warm hanging lanterns",
      "Framed wall artwork and indoor plants",
      "Spacious family dining layout"
    ],
    "cover": "assets/projects/restaurant/shahzad-tikka/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/restaurant/shahzad-tikka/scene-01-scene-1.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-02-scene-10.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-03-scene-11.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-04-scene-12.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-05-scene-13.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-06-scene-14.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-07-scene-15.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-08-scene-16.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-09-scene-17.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-10-scene-18.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-11-scene-2.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-12-scene-3.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-13-scene-4.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-14-scene-5.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-15-scene-6.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-16-scene-7.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-17-scene-8.webp",
      "assets/projects/restaurant/shahzad-tikka/scene-18-scene-9.webp"
    ],
    "sceneCount": 18
  },
  {
    "id": "restaurant-china-town-sialkot",
    "slug": "china-town-sialkot",
    "category": "restaurant",
    "subType": "finedining",
    "categoryLabel": "Restaurants & Cafes",
    "title": "China Town, Sialkot",
    "location": "Sialkot",
    "style": "Chinese Restaurant",
    "description": "A Chinese restaurant in Sialkot with a glowing red grid wall, Chinese calligraphy wall panels, black and white diamond floor tiles, red sofa booths, and warm red hanging lights.",
    "highlights": [
      "Lighted red grid feature wall",
      "Chinese wall art panels with spotlights",
      "Black and white diamond marble floor",
      "Red leather sofa booths and patterned chairs",
      "Round wooden ceiling panels with red lamps",
      "Comfortable family sitting arrangement"
    ],
    "cover": "assets/projects/restaurant/china-town-sialkot/scene-02-scene-18.webp",
    "scenes": [
      "assets/projects/restaurant/china-town-sialkot/scene-01-scene-12.webp",
      "assets/projects/restaurant/china-town-sialkot/scene-02-scene-18.webp",
      "assets/projects/restaurant/china-town-sialkot/scene-03-scene-19.webp",
      "assets/projects/restaurant/china-town-sialkot/scene-04-scene-29.webp",
      "assets/projects/restaurant/china-town-sialkot/scene-05-scene-33.webp",
      "assets/projects/restaurant/china-town-sialkot/scene-06-scene-5.webp"
    ],
    "sceneCount": 6
  },
  {
    "id": "restaurant-zubair-muslim-bar",
    "slug": "zubair-muslim-bar",
    "category": "restaurant",
    "subType": "finedining",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Zubair",
    "location": "Lounge & Dining",
    "style": "High-Ceiling Dining Hall",
    "description": "A high-ceiling dining lounge with tall red textured wall panels, vertical strip lights, white ring chandeliers, a black marble floor, and soft grey and red seating.",
    "highlights": [
      "Tall red textured wall panels with LED strips",
      "White ring chandeliers hanging from the ceiling",
      "Polished black marble floor",
      "Grey sofa booths and red dining chairs",
      "Indoor green plant dividers with warm lights",
      "Spacious open dining hall layout"
    ],
    "cover": "assets/projects/restaurant/zubair-muslim-bar/scene-03-scene-12.webp",
    "scenes": [
      "assets/projects/restaurant/zubair-muslim-bar/scene-01-scene-10.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-02-scene-11.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-03-scene-12.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-04-scene-13.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-05-scene-14.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-06-scene-15.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-07-scene-16.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-08-scene-17.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-09-scene-18.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-10-scene-19.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-11-scene-20.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-12-scene-21.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-13-scene-22.webp",
      "assets/projects/restaurant/zubair-muslim-bar/scene-14-scene-24.webp"
    ],
    "sceneCount": 14
  },
  {
    "id": "restaurant-hfc-faisalabad",
    "slug": "hfc-faisalabad",
    "category": "restaurant",
    "subType": "fastfood",
    "categoryLabel": "Restaurants & Cafes",
    "title": "HFC, Faisalabad",
    "location": "Faisalabad",
    "style": "Two-Floor Fast Food",
    "description": "A two-story fast-food restaurant in Faisalabad featuring red curved ceiling panels, red and white check wall tiles, blue booth seating, a black spiral staircase, and neon wall signs.",
    "highlights": [
      "Curved red metal ceiling panels with tube lights",
      "Black spiral staircase going to the upper floor",
      "Curved blue sofa booths for groups",
      "Red and white check wall tile border",
      "Glowing neon wall signs and menu screens",
      "Ground floor and upper floor sitting views"
    ],
    "cover": "assets/projects/restaurant/hfc-faisalabad/scene-03-gvfggvgv.webp",
    "scenes": [
      "assets/projects/restaurant/hfc-faisalabad/scene-01-01210.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-02-0124578.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-03-gvfggvgv.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-04-oo.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-05-scene-11.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-06-scene-12.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-07-scene-13.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-08-scene-14.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-09-scene-15.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-10-scene-16.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-11-scene-17.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-12-scene-18.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-13-scene-19.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-14-scene-20.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-15-scene-21.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-16-scene-24.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-17-scene-25.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-18-scene-26-1.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-19-scene-3.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-20-scene-6.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-21-vgbfg.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-22-bhngh.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-23-dsfdfdf.webp",
      "assets/projects/restaurant/hfc-faisalabad/scene-24-vfgfg.webp"
    ],
    "sceneCount": 24
  },
  {
    "id": "restaurant-hfc-muredkee",
    "slug": "hfc-muredkee",
    "category": "restaurant",
    "subType": "fastfood",
    "categoryLabel": "Restaurants & Cafes",
    "title": "HFC, Muridke",
    "location": "Muridke",
    "style": "Fast Food Restaurant",
    "description": "A fast-food branch in Muridke with an orange metal order counter, glowing HFC logo, digital menu screens, 3D burger and pizza wall designs, and comfortable booth seating.",
    "highlights": [
      "Orange metal order counter with lighted HFC logo",
      "Overhead counter canopy with digital menu screens",
      "3D burger, fries, and pizza wall designs",
      "Orange slatted divider walls and wood ceiling slats",
      "Red and grey sofa booths with dining tables",
      "Clear views of the counter and sitting hall"
    ],
    "cover": "assets/projects/restaurant/hfc-muredkee/scene-01-scene-10-3.webp",
    "scenes": [
      "assets/projects/restaurant/hfc-muredkee/scene-01-scene-10-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-02-scene-11-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-03-scene-12-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-04-scene-13-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-05-scene-14-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-06-scene-15-4.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-07-scene-16-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-08-scene-17-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-09-scene-1-3.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-10-scene-2-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-11-scene-3-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-12-scene-4-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-13-scene-5-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-14-scene-6-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-15-scene-7-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-16-scene-8-2.webp",
      "assets/projects/restaurant/hfc-muredkee/scene-17-scene-9-3.webp"
    ],
    "sceneCount": 17
  },
  {
    "id": "restaurant-afc",
    "slug": "afc",
    "category": "restaurant",
    "subType": "fastfood",
    "categoryLabel": "Restaurants & Cafes",
    "title": "AFC",
    "location": "Fast Food Branch",
    "style": "Fried Chicken Restaurant",
    "description": "A two-floor fried chicken restaurant with red and yellow zigzag wall tiles, glowing neon tube ceiling lights, upper floor seating, and an open order counter.",
    "highlights": [
      "Red, yellow, and white zigzag wall tiles",
      "Custom neon tube light design on the ceiling",
      "Double-height hall with upper mezzanine floor",
      "Lighted 'Life is Better with Fried Chicken' wall sign",
      "Brick and concrete wall finish with red lamps",
      "Order counter with digital menu boards"
    ],
    "cover": "assets/projects/restaurant/afc/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/restaurant/afc/scene-01-scene-1.webp",
      "assets/projects/restaurant/afc/scene-02-scene-10.webp",
      "assets/projects/restaurant/afc/scene-03-scene-14.webp",
      "assets/projects/restaurant/afc/scene-04-scene-4.webp"
    ],
    "sceneCount": 4
  },
  {
    "id": "restaurant-artisans",
    "slug": "artisans",
    "category": "restaurant",
    "subType": "cafe",
    "categoryLabel": "Restaurants & Cafes",
    "title": "Artisans",
    "location": "Coffee Roaster",
    "style": "Shop Front & Cafe Exterior",
    "description": "A two-story coffee shop front elevation with curved grey outer walls, large front glass windows, a green 'It's coffee time' wall mural, and outdoor plant boxes.",
    "highlights": [
      "Curved grey front building elevation with hidden lights",
      "Tall front glass windows on both floors",
      "Green 'It's coffee time' outdoor wall art",
      "Round Artisan Coffee Roaster sign board",
      "Outdoor entrance steps with built-in plant boxes",
      "Clean modern commercial front design"
    ],
    "cover": "assets/projects/restaurant/artisans/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/restaurant/artisans/scene-01-scene-1.webp",
      "assets/projects/restaurant/artisans/scene-02-scene-2.webp",
      "assets/projects/restaurant/artisans/scene-03-scene-2-upscale01.webp"
    ],
    "sceneCount": 3
  },
  {
    "id": "office-gm-cables-office",
    "slug": "gm-cables-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "GM Cables Office",
    "location": "Corporate Office",
    "style": "Office Lobby & Workstations",
    "description": "A complete office interior for GM Cables with a black and white patterned marble corridor floor, glass sliding doors, modern ceiling strip lights, and glass-partitioned staff desks.",
    "highlights": [
      "Black and white triangle marble floor design",
      "Glass sliding doors with dark metal frames",
      "Modern linear strip lights in the ceiling",
      "Staff desk halls with glass partitions",
      "Wooden and stone wall paneling in corridors",
      "Complete views of lobby, rooms, and desks"
    ],
    "cover": "assets/projects/office/gm-cables-office/scene-01-whatsapp-image-2026-03-13-at-11-09-26-pm.webp",
    "scenes": [
      "assets/projects/office/gm-cables-office/scene-01-whatsapp-image-2026-03-13-at-11-09-26-pm.webp",
      "assets/projects/office/gm-cables-office/scene-02-whatsapp-image-2026-03-13-at-11-09-28-pm.webp",
      "assets/projects/office/gm-cables-office/scene-03-whatsapp-image-2026-03-13-at-11-09-31-pm-1.webp",
      "assets/projects/office/gm-cables-office/scene-04-whatsapp-image-2026-03-13-at-11-09-31-pm-2.webp",
      "assets/projects/office/gm-cables-office/scene-05-whatsapp-image-2026-03-13-at-11-09-31-pm-4.webp",
      "assets/projects/office/gm-cables-office/scene-06-whatsapp-image-2026-03-13-at-11-09-31-pm-8.webp",
      "assets/projects/office/gm-cables-office/scene-07-whatsapp-image-2026-03-13-at-11-09-31-pm.webp",
      "assets/projects/office/gm-cables-office/scene-08-whatsapp-image-2026-03-13-at-11-48-13-pm-1.webp",
      "assets/projects/office/gm-cables-office/scene-09-whatsapp-image-2026-03-13-at-11-48-13-pm.webp",
      "assets/projects/office/gm-cables-office/scene-10-whatsapp-image-2026-03-13-at-11-48-14-pm-2.webp",
      "assets/projects/office/gm-cables-office/scene-11-whatsapp-image-2026-03-13-at-11-48-14-pm.webp",
      "assets/projects/office/gm-cables-office/scene-12-whatsapp-image-2026-03-13-at-4-51-23-am-8.webp",
      "assets/projects/office/gm-cables-office/scene-13-whatsapp-image-2026-03-13-at-4-51-23-am-9.webp",
      "assets/projects/office/gm-cables-office/scene-14-whatsapp-image-2026-03-13-at-4-51-24-am-1.webp",
      "assets/projects/office/gm-cables-office/scene-15-whatsapp-image-2026-03-13-at-4-51-24-am-11.webp",
      "assets/projects/office/gm-cables-office/scene-16-whatsapp-image-2026-03-13-at-4-51-24-am-14.webp",
      "assets/projects/office/gm-cables-office/scene-17-whatsapp-image-2026-03-13-at-4-51-24-am-4.webp",
      "assets/projects/office/gm-cables-office/scene-18-whatsapp-image-2026-03-13-at-4-51-24-am-9.webp",
      "assets/projects/office/gm-cables-office/scene-19-whatsapp-image-2026-03-13-at-4-51-24-am.webp"
    ],
    "sceneCount": 19
  },
  {
    "id": "office-gulberg-office",
    "slug": "gulberg-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Gulberg Office",
    "location": "Gulberg",
    "style": "Modern Executive Lounge",
    "description": "A modern office and sitting lounge in Gulberg featuring 3D square stone walls with warm hidden lights in every box, curved cream sofas, and dark wood wall panels.",
    "highlights": [
      "3D square stone walls with warm hidden lights",
      "Curved cream lounge sofas and black center table",
      "Dark glass and wooden wall panels",
      "Clean ceiling with recessed strip lights",
      "Soft carpet and indoor corner plants",
      "Comfortable modern sitting and meeting space"
    ],
    "cover": "assets/projects/office/gulberg-office/scene-04-scene-3-1.webp",
    "scenes": [
      "assets/projects/office/gulberg-office/scene-01-scene-12-1.webp",
      "assets/projects/office/gulberg-office/scene-02-scene-13-1.webp",
      "assets/projects/office/gulberg-office/scene-03-scene-17-1.webp",
      "assets/projects/office/gulberg-office/scene-04-scene-3-1.webp",
      "assets/projects/office/gulberg-office/scene-05-scene-5-1.webp",
      "assets/projects/office/gulberg-office/scene-06-scene-7-1.webp",
      "assets/projects/office/gulberg-office/scene-07-scene-8-1.webp"
    ],
    "sceneCount": 7
  },
  {
    "id": "office-huzaifa-office",
    "slug": "huzaifa-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Huzaifa Office",
    "location": "Executive Office",
    "style": "Modern Office Interior",
    "description": "An executive office with an indoor tree beside a wooden display shelf, a stone wall design with warm back lighting, a round ceiling light dome, and a soft lounge sofa.",
    "highlights": [
      "Full-height indoor tree inside the office lounge",
      "Stone wall design with warm back lighting",
      "Round ceiling skylight above textured walls",
      "Wooden display shelves with hidden lights",
      "Curved cream sofa and marble center tables",
      "Natural stone and warm wood color theme"
    ],
    "cover": "assets/projects/office/huzaifa-office/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/office/huzaifa-office/scene-01-scene-1.webp",
      "assets/projects/office/huzaifa-office/scene-02-scene-2.webp",
      "assets/projects/office/huzaifa-office/scene-03-scene-3.webp",
      "assets/projects/office/huzaifa-office/scene-04-scene-4.webp",
      "assets/projects/office/huzaifa-office/scene-05-scene-5.webp"
    ],
    "sceneCount": 5
  },
  {
    "id": "office-lake-city-office",
    "slug": "lake-city-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Lake City Office",
    "location": "Lake City",
    "style": "Reception & Showroom Office",
    "description": "A bright double-height office in Lake City with tall front glass windows, a curved wooden reception desk, concrete pillars, and a comfortable cream waiting sofa.",
    "highlights": [
      "Tall floor-to-ceiling glass windows for daylight",
      "Curved wooden and white stone reception counter",
      "Concrete pillars and wooden slat wall design",
      "Cream waiting lounge sofas for visitors",
      "Upper floor glass walkway overlooking reception",
      "Bright and open office showroom layout"
    ],
    "cover": "assets/projects/office/lake-city-office/scene-01-scene-1-1.webp",
    "scenes": [
      "assets/projects/office/lake-city-office/scene-01-scene-1-1.webp",
      "assets/projects/office/lake-city-office/scene-02-scene-11.webp",
      "assets/projects/office/lake-city-office/scene-03-scene-12.webp",
      "assets/projects/office/lake-city-office/scene-04-scene-14.webp",
      "assets/projects/office/lake-city-office/scene-05-scene-17.webp",
      "assets/projects/office/lake-city-office/scene-06-scene-18.webp",
      "assets/projects/office/lake-city-office/scene-07-scene-19.webp",
      "assets/projects/office/lake-city-office/scene-08-scene-20.webp",
      "assets/projects/office/lake-city-office/scene-09-scene-21.webp",
      "assets/projects/office/lake-city-office/scene-10-scene-4.webp",
      "assets/projects/office/lake-city-office/scene-11-scene-6.webp"
    ],
    "sceneCount": 11
  },
  {
    "id": "office-mr-noman-office",
    "slug": "mr-noman-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Mr. Noman Office",
    "location": "Executive Room",
    "style": "Director Office Suite",
    "description": "A director office with a white marble and wooden shelf wall behind the desk, a golden ribbon chandelier, a brown leather sofa, and wooden flooring.",
    "highlights": [
      "White marble center wall behind the main desk",
      "Wooden display shelves with warm hidden lights",
      "Golden ribbon chandelier in the ceiling",
      "Brown leather sofa and high-back boss chair",
      "Marble and wood office desk",
      "Wooden floor with a center carpet"
    ],
    "cover": "assets/projects/office/mr-noman-office/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/office/mr-noman-office/scene-01-scene-1.webp",
      "assets/projects/office/mr-noman-office/scene-02-scene-2.webp",
      "assets/projects/office/mr-noman-office/scene-03-scene-3.webp",
      "assets/projects/office/mr-noman-office/scene-04-scene-4.webp",
      "assets/projects/office/mr-noman-office/scene-05-scene-5.webp",
      "assets/projects/office/mr-noman-office/scene-06-scene-6.webp"
    ],
    "sceneCount": 6
  },
  {
    "id": "office-mr-yasir-office",
    "slug": "mr-yasir-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Mr. Yasir Office",
    "location": "IT & Staff Office",
    "style": "Modern Workspace",
    "description": "A modern workspace with a 4-seat computer table, wooden and grey textured walls with a large digital clock, black glass doors, and comfortable office chairs.",
    "highlights": [
      "4-person computer desk with center plant box",
      "Wooden and grey wall with a large digital clock",
      "Black-framed glass doors with blinds",
      "Modern ceiling lights above the desks",
      "Comfortable tan and wooden office chairs",
      "Clean and practical layout for team work"
    ],
    "cover": "assets/projects/office/mr-yasir-office/scene-01-scene-1.webp",
    "scenes": [
      "assets/projects/office/mr-yasir-office/scene-01-scene-1.webp",
      "assets/projects/office/mr-yasir-office/scene-02-scene-25.webp",
      "assets/projects/office/mr-yasir-office/scene-03-scene-27.webp",
      "assets/projects/office/mr-yasir-office/scene-04-scene-28.webp",
      "assets/projects/office/mr-yasir-office/scene-05-scene-3.webp",
      "assets/projects/office/mr-yasir-office/scene-06-scene-30.webp",
      "assets/projects/office/mr-yasir-office/scene-07-scene-31.webp",
      "assets/projects/office/mr-yasir-office/scene-08-scene-32.webp",
      "assets/projects/office/mr-yasir-office/scene-09-scene-6.webp",
      "assets/projects/office/mr-yasir-office/scene-10-scene-7.webp"
    ],
    "sceneCount": 10
  },
  {
    "id": "office-darman-office",
    "slug": "darman-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "Darman Office",
    "location": "Executive Room",
    "style": "Clean Modern Office",
    "description": "A clean and simple executive office in light cream stone and wood tones, featuring a backlit bookshelf wall, a modern desk, and black ceiling track lights.",
    "highlights": [
      "Light cream stone and wooden slat wall panels",
      "Backlit bookshelf and storage cabinets behind desk",
      "Modern angular office desk with leather chairs",
      "Black track lights in the ceiling",
      "Large window with full-height curtains"
    ],
    "cover": "assets/projects/office/darman-office/scene-01-scene-1-1.webp",
    "scenes": [
      "assets/projects/office/darman-office/scene-01-scene-1-1.webp",
      "assets/projects/office/darman-office/scene-02-scene-2.webp",
      "assets/projects/office/darman-office/scene-03-scene-4.webp",
      "assets/projects/office/darman-office/scene-04-scene-5.webp",
      "assets/projects/office/darman-office/scene-05-scene-8.webp"
    ],
    "sceneCount": 5
  },
  {
    "id": "office-sts-office",
    "slug": "sts-office",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "STS Office",
    "location": "Option 01 & Option 02",
    "style": "Classic Wooden Office",
    "description": "A classic dark-wood executive office designed in two room styles (01 and 02), featuring carved wooden walls and ceilings, a crystal chandelier, leather sofas, and a traditional carpet.",
    "highlights": [
      "Carved dark walnut wood wall paneling",
      "Classic wooden ceiling with golden details",
      "Crystal chandelier and warm wall lamps",
      "Solid wood office table with leather chairs",
      "Wooden bookshelves, wall paintings, and carpet",
      "Two complete classic room design options"
    ],
    "cover": "assets/projects/office/sts-office/scene-01-01-scene-11-1.webp",
    "scenes": [
      "assets/projects/office/sts-office/scene-01-01-scene-11-1.webp",
      "assets/projects/office/sts-office/scene-02-01-scene-13-1.webp",
      "assets/projects/office/sts-office/scene-03-01-scene-14-1.webp",
      "assets/projects/office/sts-office/scene-04-01-scene-15-1.webp",
      "assets/projects/office/sts-office/scene-05-01-scene-2-1.webp",
      "assets/projects/office/sts-office/scene-06-01-scene-6-1.webp",
      "assets/projects/office/sts-office/scene-07-01-scene-7-1.webp",
      "assets/projects/office/sts-office/scene-08-01-scene-9-1.webp",
      "assets/projects/office/sts-office/scene-09-02-scene-1.webp",
      "assets/projects/office/sts-office/scene-10-02-scene-2.webp",
      "assets/projects/office/sts-office/scene-11-02-scene-3.webp",
      "assets/projects/office/sts-office/scene-12-02-scene-4.webp",
      "assets/projects/office/sts-office/scene-13-02-scene-5.webp",
      "assets/projects/office/sts-office/scene-14-02-scene-6.webp",
      "assets/projects/office/sts-office/scene-15-02-scene-7.webp"
    ],
    "sceneCount": 15
  },
  {
    "id": "office-school",
    "slug": "school",
    "category": "office",
    "subType": "all",
    "categoryLabel": "Offices & School",
    "title": "School",
    "location": "Kids Campus",
    "style": "Classroom & Play Area",
    "description": "A colorful preschool classroom and indoor play area with rainbow wall artwork, airplane ceiling lights, bunny-ear chairs for kids, a small climbing wall, and a ball pit.",
    "highlights": [
      "Airplane and cloud shaped ceiling lights",
      "Rainbow and smiling sun wall paintings",
      "Bunny-ear kids chairs and colorful round tables",
      "Indoor kids climbing wall with soft mats",
      "Soft ball pit play corner and storage shelves",
      "Bright and safe indoor design for children"
    ],
    "cover": "assets/projects/office/school/scene-01-scene-10.webp",
    "scenes": [
      "assets/projects/office/school/scene-01-scene-10.webp",
      "assets/projects/office/school/scene-02-scene-11.webp",
      "assets/projects/office/school/scene-03-scene-12.webp",
      "assets/projects/office/school/scene-04-scene-3.webp",
      "assets/projects/office/school/scene-05-scene-4.webp",
      "assets/projects/office/school/scene-06-scene-5.webp",
      "assets/projects/office/school/scene-07-scene-6.webp",
      "assets/projects/office/school/scene-08-scene-7.webp",
      "assets/projects/office/school/scene-09-scene-8.webp",
      "assets/projects/office/school/scene-10-scene-9.webp"
    ],
    "sceneCount": 10
  },
  {
    "id": "residential-huzaifa-house",
    "slug": "huzaifa-house",
    "category": "residential",
    "subType": "all",
    "categoryLabel": "Houses & Villas",
    "title": "Huzaifa House",
    "location": "Day & Night Views",
    "style": "Modern House Design",
    "description": "A modern house exterior shown in both day and night views with two front elevation options, a tall wooden entrance gate, and an outdoor sitting patio.",
    "highlights": [
      "Two front elevation design options included",
      "Both day and night lighting views",
      "Tall front entrance with wooden ceiling",
      "Outdoor sitting patio with warm wall lights",
      "Large corner glass windows and terrace plants",
      "8 complete exterior and patio views"
    ],
    "cover": "assets/projects/residential/huzaifa-house/scene-02-night-op-2.webp",
    "scenes": [
      "assets/projects/residential/huzaifa-house/scene-01-day-op-2.webp",
      "assets/projects/residential/huzaifa-house/scene-02-night-op-2.webp",
      "assets/projects/residential/huzaifa-house/scene-03-q1.webp",
      "assets/projects/residential/huzaifa-house/scene-04-q2.webp",
      "assets/projects/residential/huzaifa-house/scene-05-q3.webp",
      "assets/projects/residential/huzaifa-house/scene-06-q4.webp",
      "assets/projects/residential/huzaifa-house/scene-07-q5.webp",
      "assets/projects/residential/huzaifa-house/scene-08-q6.webp"
    ],
    "sceneCount": 8
  },
  {
    "id": "residential-ijaz-house",
    "slug": "ijaz-house",
    "category": "residential",
    "subType": "all",
    "categoryLabel": "Houses & Villas",
    "title": "Ijaz House",
    "location": "House Exterior",
    "style": "Classic Stone House",
    "description": "A classic style house exterior in warm stone with tall pillars, arched windows, a grand front porch with a chandelier, and warm evening lighting.",
    "highlights": [
      "Tall arched front porch with a hanging chandelier",
      "Classic stone pillars and carved boundary railings",
      "Lighted calligraphy frame inside the front porch",
      "Warm evening lights across the front walls",
      "Green front lawn and main gate view"
    ],
    "cover": "assets/projects/residential/ijaz-house/scene-01-ijaz-house.webp",
    "scenes": [
      "assets/projects/residential/ijaz-house/scene-01-ijaz-house.webp"
    ],
    "sceneCount": 1
  },
  {
    "id": "residential-spanish-villa",
    "slug": "spanish-villa",
    "category": "residential",
    "subType": "all",
    "categoryLabel": "Houses & Villas",
    "title": "Villa",
    "location": "Day & Evening Views",
    "style": "Spanish Style Villa",
    "description": "A Spanish style house exterior shown in day and evening views with red roof tiles, front arches, iron balcony railings, and green lawn landscaping.",
    "highlights": [
      "Spanish red tile sloping roof design",
      "Three-arch front porch with round pillars",
      "Upper floor balcony with black iron railings",
      "Daytime and warm evening lighting views",
      "Green boundary plants and paved driveway"
    ],
    "cover": "assets/projects/residential/spanish-villa/scene-02-image1-002.webp",
    "scenes": [
      "assets/projects/residential/spanish-villa/scene-01-02.webp",
      "assets/projects/residential/spanish-villa/scene-02-image1-002.webp"
    ],
    "sceneCount": 2
  }
];

const POPULAR_PROJECT_IDS = [
  "residential-huzaifa-house",
  "residential-spanish-villa",
  "residential-ijaz-house",
  "restaurant-rumi-s-cfae-multan"
];

let activeHeroProject = PORTFOLIO_PROJECTS.find(p => p.id === "residential-huzaifa-house") || PORTFOLIO_PROJECTS[0];
let activeSpotlight = PORTFOLIO_PROJECTS[0];
let spotlightSceneIdx = 0;
let heroCircleTimer = null;
let heroCircleIdx = 0;

let modalProject = PORTFOLIO_PROJECTS[0];
let modalSceneIdx = 0;

function buildWhatsAppLink(proj) {
  const txt = `Assalam o Alaikum CubeX Design Studio! I visited your website and want to discuss "${proj.title}".`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
}

/* ==========================================================================
   1. FULL-SCREEN PROJECT GALLERY MODAL
   ========================================================================== */
function openProjectModal(proj) {
  modalProject = proj;
  modalSceneIdx = 0;

  const modal = document.getElementById("demoModal");
  if (!modal) return;

  const catEl = document.getElementById("demoModalCat");
  const titleEl = document.getElementById("demoModalTitle");
  const descEl = document.getElementById("demoModalDesc");
  const hlList = document.getElementById("demoModalHighlights");
  const waBtn = document.getElementById("demoModalWaBtn");

  if (catEl) catEl.textContent = proj.categoryLabel;
  if (titleEl) titleEl.textContent = proj.title;
  if (descEl) descEl.textContent = proj.description;

  if (hlList && proj.highlights) {
    hlList.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join("");
  }

  if (waBtn) waBtn.href = buildWhatsAppLink(proj);

  renderModalStage();
  renderModalMasonry();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("demoModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function renderModalStage() {
  const img = document.getElementById("demoModalImg");
  const counter = document.getElementById("demoModalCounter");
  if (!img || !modalProject.scenes.length) return;

  img.src = modalProject.scenes[modalSceneIdx];
  img.alt = `${modalProject.title} View ${modalSceneIdx + 1}`;
  if (counter) counter.textContent = `${modalSceneIdx + 1} / ${modalProject.scenes.length}`;

  document.querySelectorAll(".demo-masonry-card").forEach((c, i) => {
    c.classList.toggle("active", i === modalSceneIdx);
  });
}

function renderModalMasonry() {
  const grid = document.getElementById("demoModalGrid");
  if (!grid) return;
  grid.innerHTML = "";

  modalProject.scenes.forEach((s, idx) => {
    const item = document.createElement("div");
    item.className = `demo-masonry-card ${idx === 0 ? "active" : ""}`;
    item.innerHTML = `
      <img src="${s}" alt="${modalProject.title} View ${idx + 1}" loading="lazy" />
      <span>View ${idx + 1}</span>
    `;
    item.addEventListener("click", () => {
      modalSceneIdx = idx;
      renderModalStage();
      const stageEl = document.querySelector(".demo-modal-stage");
      if (stageEl) stageEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    grid.appendChild(item);
  });
}

/* ==========================================================================
   2. HERO CIRCULAR FOCAL SHOWCASE & "POPULAR RIGHT NOW" STRIP
   ========================================================================== */
function initHeroShowcase() {
  const circleImg = document.getElementById("heroCircleImg");
  const circleTitle = document.getElementById("heroCircleTitle");
  const circleSub = document.getElementById("heroCircleSub");
  const circleViewport = document.getElementById("heroCircleViewport");
  const cardsContainer = document.getElementById("popularCardsStrip");

  const popularProjs = POPULAR_PROJECT_IDS
    .map(id => PORTFOLIO_PROJECTS.find(p => p.id === id))
    .filter(Boolean);

  function setHeroCircle(proj, idx) {
    activeHeroProject = proj;
    heroCircleIdx = idx;
    if (circleImg) {
      circleImg.style.opacity = "0.3";
      circleImg.style.transform = "scale(0.95)";
      setTimeout(() => {
        circleImg.src = proj.cover;
        circleImg.alt = proj.title;
        circleImg.style.opacity = "1";
        circleImg.style.transform = "scale(1)";
      }, 200);
    }
    if (circleTitle) circleTitle.textContent = proj.title;
    if (circleSub) circleSub.textContent = `${proj.categoryLabel} • ${proj.sceneCount} Views`;

    document.querySelectorAll(".popular-item-card").forEach((c, i) => {
      c.classList.toggle("active", i === idx);
    });
  }

  // Click on Circular Viewport opens full gallery modal
  if (circleViewport) {
    circleViewport.style.cursor = "pointer";
    circleViewport.title = "Click to View All 3D Views";
    circleViewport.addEventListener("click", (e) => {
      e.preventDefault();
      openProjectModal(activeHeroProject);
    });
  }

  // Render 4 "Popular Right Now" Cards
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
    popularProjs.forEach((proj, idx) => {
      const card = document.createElement("div");
      card.className = `popular-item-card ${idx === 0 ? "active" : ""}`;
      card.style.cursor = "pointer";
      card.innerHTML = `
        <div class="popular-round-thumb">
          <img src="${proj.cover}" alt="${proj.title}" loading="lazy" />
        </div>
        <div class="popular-card-info">
          <h4 class="popular-card-title">${proj.title}</h4>
          <span class="popular-card-category">${proj.style}</span>
        </div>
        <div class="popular-quick-btn" title="Open All 3D Views">→</div>
      `;
      card.addEventListener("click", () => {
        setHeroCircle(proj, idx);
        openProjectModal(proj);
        resetHeroTimer();
      });
      cardsContainer.appendChild(card);
    });
  }

  function resetHeroTimer() {
    if (heroCircleTimer) clearInterval(heroCircleTimer);
    heroCircleTimer = setInterval(() => {
      const nextIdx = (heroCircleIdx + 1) % popularProjs.length;
      setHeroCircle(popularProjs[nextIdx], nextIdx);
    }, 4500);
  }

  setHeroCircle(popularProjs[0], 0);
  resetHeroTimer();

  const prevBtn = document.getElementById("popularPrevBtn");
  const nextBtn = document.getElementById("popularNextBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const nextIdx = (heroCircleIdx - 1 + popularProjs.length) % popularProjs.length;
      setHeroCircle(popularProjs[nextIdx], nextIdx);
      resetHeroTimer();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const nextIdx = (heroCircleIdx + 1) % popularProjs.length;
      setHeroCircle(popularProjs[nextIdx], nextIdx);
      resetHeroTimer();
    });
  }
}

/* ==========================================================================
   3. PORTFOLIO TABS, SPOTLIGHT VIEWER & 26 PROJECTS
   ========================================================================== */
function setSpotlightProject(proj) {
  activeSpotlight = proj;
  spotlightSceneIdx = 0;

  const tEl = document.getElementById("spotlightTitle");
  const dEl = document.getElementById("spotlightDesc");
  const cEl = document.getElementById("spotlightCatPill");
  const sEl = document.getElementById("spotlightStylePill");
  const lEl = document.getElementById("spotlightLocationPill");

  if (tEl) tEl.textContent = proj.title;
  if (dEl) dEl.textContent = proj.description;
  if (cEl) cEl.textContent = proj.categoryLabel;
  if (sEl) sEl.textContent = proj.style;
  if (lEl) lEl.textContent = proj.location || "Pakistan";

  const hlList = document.getElementById("spotlightHighlights");
  if (hlList && proj.highlights) {
    hlList.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join("");
  }

  const waBtn = document.getElementById("spotlightWaBtn");
  if (waBtn) waBtn.href = buildWhatsAppLink(proj);

  renderSpotlightImage();
  renderSpotlightThumbs();
}

function renderSpotlightImage() {
  const img = document.getElementById("spotlightMainImg");
  const counter = document.getElementById("spotlightCounter");
  if (!img || !activeSpotlight.scenes.length) return;

  img.src = activeSpotlight.scenes[spotlightSceneIdx];
  img.alt = `${activeSpotlight.title} View ${spotlightSceneIdx + 1}`;
  if (counter) counter.textContent = `${spotlightSceneIdx + 1} / ${activeSpotlight.scenes.length}`;

  document.querySelectorAll(".spotlight-thumb-btn").forEach((b, i) => {
    b.classList.toggle("active", i === spotlightSceneIdx);
  });
}

function renderSpotlightThumbs() {
  const strip = document.getElementById("spotlightThumbsRow");
  if (!strip) return;
  strip.innerHTML = "";
  activeSpotlight.scenes.forEach((s, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `spotlight-thumb-btn ${idx === 0 ? "active" : ""}`;
    b.innerHTML = `<img src="${s}" alt="" loading="lazy" />`;
    b.addEventListener("click", () => {
      spotlightSceneIdx = idx;
      renderSpotlightImage();
    });
    strip.appendChild(b);
  });
}

function renderProjectsGrid(cat = "restaurant") {
  const grid = document.getElementById("demoProjectsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const list = cat === "all" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category === cat);
  list.forEach(proj => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="card-img-box">
        <img src="${proj.cover}" alt="${proj.title}" loading="lazy" />
        <span class="card-badge-cat">${proj.categoryLabel}</span>
        <span class="card-badge-count">${proj.sceneCount} Views</span>
      </div>
      <div class="card-body">
        <span class="card-style">${proj.style}</span>
        <h4 class="card-title">${proj.title}</h4>
        <p class="card-desc">${proj.description}</p>
        <div class="card-footer">
          <span class="card-open-link">Open Full Gallery (${proj.sceneCount} Views) →</span>
          <a href="${buildWhatsAppLink(proj)}" target="_blank" rel="noopener" class="card-wa-btn" onclick="event.stopPropagation();">WhatsApp</a>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      setSpotlightProject(proj);
      openProjectModal(proj);
    });
    grid.appendChild(card);
  });
}

/* ==========================================================================
   4. DAY VS NIGHT SLIDER & WHATSAPP FORM
   ========================================================================== */
const DAY_NIGHT_PRESETS = {
  huzaifa: {
    day: "assets/projects/residential/huzaifa-house/scene-01-day-op-2.webp",
    night: "assets/projects/residential/huzaifa-house/scene-02-night-op-2.webp",
    dayLabel: "Daylight View",
    nightLabel: "Night Lighting View"
  },
  villa: {
    day: "assets/projects/residential/spanish-villa-bwp/scene-01-front-day.webp",
    night: "assets/projects/residential/spanish-villa-bwp/scene-02-front-evening.webp",
    dayLabel: "Daylight View",
    nightLabel: "Evening Lighting View"
  },
  options: {
    day: "assets/projects/residential/huzaifa-house/scene-03-day-op-1.webp",
    night: "assets/projects/residential/huzaifa-house/scene-01-day-op-2.webp",
    dayLabel: "Elevation Option 1",
    nightLabel: "Elevation Option 2"
  }
};

function initDayNight() {
  const stage = document.getElementById("dnStage");
  const layer = document.getElementById("dnLayer");
  const line = document.getElementById("dnLine");
  const handle = document.getElementById("dnHandle");
  if (!stage || !layer) return;

  let dragging = false;
  function setPos(clientX) {
    const r = stage.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    p = Math.max(3, Math.min(97, p));
    layer.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (line) line.style.left = `${p}%`;
    if (handle) handle.style.left = `${p}%`;
  }

  stage.addEventListener("mousedown", (e) => { dragging = true; setPos(e.clientX); });
  window.addEventListener("mousemove", (e) => { if (dragging) setPos(e.clientX); });
  window.addEventListener("mouseup", () => { dragging = false; });
  stage.addEventListener("touchstart", (e) => { dragging = true; if (e.touches[0]) setPos(e.touches[0].clientX); }, { passive: true });
  stage.addEventListener("touchmove", (e) => { if (dragging && e.touches[0]) setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener("touchend", () => { dragging = false; });

  // Preset Buttons
  document.querySelectorAll(".dn-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".dn-preset-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.preset;
      const preset = DAY_NIGHT_PRESETS[key];
      if (!preset) return;

      const baseImg = stage.querySelector("img:not(#dnLayer img)");
      const layerImg = layer.querySelector("img");
      if (baseImg) baseImg.src = preset.night;
      if (layerImg) layerImg.src = preset.day;

      const dLbl = document.getElementById("dnDayLabel");
      const nLbl = document.getElementById("dnNightLabel");
      if (dLbl) dLbl.textContent = preset.dayLabel;
      if (nLbl) nLbl.textContent = preset.nightLabel;
    });
  });
}

function initContactForm() {
  const form = document.getElementById("demoBriefForm");
  const refSelect = document.getElementById("demoRefSelect");
  if (refSelect) {
    refSelect.innerHTML = PORTFOLIO_PROJECTS.map(p =>
      `<option value="${p.title}">${p.title} (${p.categoryLabel})</option>`
    ).join("");
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("demoName").value.trim();
      const cat = document.getElementById("demoCatSelect") ? document.getElementById("demoCatSelect").value : "Architectural Project";
      const area = document.getElementById("demoAreaSelect") ? document.getElementById("demoAreaSelect").value : "Not specified";
      const scope = document.getElementById("demoType") ? document.getElementById("demoType").value : "Design";
      const timeline = document.getElementById("demoTimeline") ? document.getElementById("demoTimeline").value : "Flexible";
      const ref = refSelect ? refSelect.value : "";
      const city = document.getElementById("demoCity").value.trim() || "Not specified";

      const msg = `Assalam o Alaikum CubeX Studio!\n\nName: ${name}\nProject Category: ${cat}\nApproximate Area / Size: ${area}\nService Required: ${scope}\nProject Timeline: ${timeline}\nReference Project Liked: ${ref}\nCity / Location: ${city}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    });
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initHeroShowcase();
  setSpotlightProject(PORTFOLIO_PROJECTS[0]);
  renderProjectsGrid("restaurant");
  initDayNight();
  initContactForm();

  // Modal Close Handlers
  const modalCloseBtn = document.getElementById("demoModalClose");
  const modal = document.getElementById("demoModal");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "demoModal") closeProjectModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
    if (modal && modal.classList.contains("open")) {
      if (e.key === "ArrowLeft") {
        modalSceneIdx = (modalSceneIdx - 1 + modalProject.scenes.length) % modalProject.scenes.length;
        renderModalStage();
      } else if (e.key === "ArrowRight") {
        modalSceneIdx = (modalSceneIdx + 1) % modalProject.scenes.length;
        renderModalStage();
      }
    }
  });

  // Modal Stage Prev/Next
  const mPrev = document.getElementById("modalPrev");
  const mNext = document.getElementById("modalNext");
  if (mPrev) {
    mPrev.addEventListener("click", () => {
      modalSceneIdx = (modalSceneIdx - 1 + modalProject.scenes.length) % modalProject.scenes.length;
      renderModalStage();
    });
  }
  if (mNext) {
    mNext.addEventListener("click", () => {
      modalSceneIdx = (modalSceneIdx + 1) % modalProject.scenes.length;
      renderModalStage();
    });
  }

  // Spotlight Image click opens modal
  const spotImg = document.getElementById("spotlightMainImg");
  if (spotImg) {
    spotImg.style.cursor = "pointer";
    spotImg.title = "Click to View All 3D Views";
    spotImg.addEventListener("click", () => {
      openProjectModal(activeSpotlight);
    });
  }

  // Category Tabs
  document.querySelectorAll(".cat-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.cat;
      const filtered = cat === "all" ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category === cat);
      if (filtered.length) setSpotlightProject(filtered[0]);
      renderProjectsGrid(cat);
    });
  });

  // Spotlight Arrows
  const pBtn = document.getElementById("spotlightPrev");
  const nBtn = document.getElementById("spotlightNext");
  if (pBtn) {
    pBtn.addEventListener("click", () => {
      spotlightSceneIdx = (spotlightSceneIdx - 1 + activeSpotlight.scenes.length) % activeSpotlight.scenes.length;
      renderSpotlightImage();
    });
  }
  if (nBtn) {
    nBtn.addEventListener("click", () => {
      spotlightSceneIdx = (spotlightSceneIdx + 1) % activeSpotlight.scenes.length;
      renderSpotlightImage();
    });
  }
});

