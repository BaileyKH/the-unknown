import tent1 from './assets/gear/t1.svg'
import tent2 from './assets/gear/t2.svg'
import tent3 from './assets/gear/t3.svg'
import tent4 from './assets/gear/t4.svg'

import sleep1 from './assets/gear/sb1.svg'
import sleep2 from './assets/gear/sb2.svg'
import sleep3 from './assets/gear/sb3.svg'
import sleep4 from './assets/gear/sb4.svg'

import bag1 from './assets/gear/b1.svg'
import bag2 from './assets/gear/b2.svg'
import bag3 from './assets/gear/b3.svg'
import bag4 from './assets/gear/b4.svg'

import kitchen1 from './assets/gear/k1.svg'
import kitchen2 from './assets/gear/k2.svg'
import kitchen3 from './assets/gear/k3.svg'
import kitchen4 from './assets/gear/k4.svg'

import clothes1 from './assets/gear/c1.svg'
import clothes2 from './assets/gear/c2.svg'
import clothes3 from './assets/gear/c3.svg'
import clothes4 from './assets/gear/c4.svg'

export const gearData = () => [
    {
        id: 1,
        brand: "AdventurePro",
        item: "4-Person Dome Tent",
        description: "The AdventurePro 4-Person Dome Tent is perfect for small families or groups of friends. It features a durable waterproof fabric, easy setup with color-coded poles, and a spacious interior with ample headroom. The tent also includes a large front vestibule for gear storage and a convenient electrical cord access port.",
        img: tent1,
        price: "$199.99",
        category: "tent",
    },
    {
        id: 2,
        brand: "SummitPeak",
        item: "2-Person Ultralight Tent",
        description: "The SummitPeak 2-Person Ultralight Tent is designed for backpackers who prioritize weight and convenience. Weighing just 3.2 pounds, this tent offers a compact design without compromising on comfort. It includes mesh panels for ventilation, a waterproof rainfly, and an easy-to-assemble pole system.",
        img: tent2,
        price: "$149.99",
        category: "tent",
    },
    {
        id: 3,
        brand: "TrailBlazer",
        item: "3-Person Instant Cabin Tent",
        description: "The TrailBlazer 3-Person Instant Cabin Tent offers a hassle-free setup with its innovative instant frame design. This tent can be pitched in under two minutes, making it perfect for quick getaways. It includes a water-resistant rainfly, a gear loft, and an integrated LED light system for nighttime convenience.",
        img: tent3,
        price: "$179.99",
        category: "tent",
    },
    {
        id: 4,
        brand: "EverestExpedition",
        item: "6-Person Family Tent",
        description: "The EverestExpedition 6-Person Family Tent is ideal for larger groups or family camping trips. With a spacious interior that fits up to six people, this tent features multiple storage pockets, a removable room divider, and large windows for excellent ventilation. Its sturdy construction ensures stability in various weather conditions.",
        img: tent4,
        price: "$299.99",
        category: "tent",
    },
    {
        id: 5,
        brand: "Pioneer",
        item: "50L Trekking Backpack",
        description: "The Pioneer 50L Trekking Backpack is ideal for multi-day adventures. With its large main compartment, multiple pockets, and external attachment points, this backpack provides ample storage for all your gear. The adjustable, padded shoulder straps and ventilated back panel ensure comfort and breathability on long hikes.",
        img: bag1,
        price: "$129.99",
        category: "backpack",
    },
    {
        id: 6,
        brand: "TrailBlazer",
        item: "35L Daypack",
        description: "The TrailBlazer 35L Daypack is perfect for day trips and short hikes. It features a lightweight design, hydration reservoir compatibility, and multiple compartments for organized storage. The padded hip belt and sternum strap provide stability and distribute weight evenly, making it comfortable for all-day wear.",
        img: bag2,
        price: "$89.99",
        category: "backpack",
    },
    {
        id: 7,
        brand: "Expedition",
        item: "65L Pro Backpack",
        description: "The Expedition 65L Pro Backpack is designed for extended trips and heavy loads. This backpack offers a spacious main compartment, side pockets, and a top lid with an additional pocket. Its robust frame, adjustable suspension system, and ergonomic design ensure optimal load distribution and comfort on long treks.",
        img: bag3,
        price: "$159.99",
        category: "backpack",
    },
    {
        id: 8,
        brand: "Ultralight",
        item: "45L Venture Backpack",
        description: "The Ultralight 45L Venture Backpack is ideal for lightweight backpacking and thru-hiking. Weighing just 2.2 pounds, this backpack combines durability with a minimalist design. It includes a roll-top closure, external mesh pockets, and a supportive hip belt, providing a perfect balance between weight and functionality.",
        img: bag4,
        price: "$109.99",
        category: "backpack",
    },
    {
        id: 9,
        brand: "TrailGuardian",
        item: "15°F Expedition Sleeping Bag",
        description: "The TrailGuardian 15°F Expedition Sleeping Bag is built for extreme conditions. With its advanced synthetic insulation and wind-resistant shell, this sleeping bag provides exceptional warmth and protection. The ergonomic mummy design, full-length draft tube, and adjustable hood ensure maximum heat retention in cold environments.",
        img: sleep1,
        price: "$159.99",
        category: "sleeping bag",
    },
    {
        id: 10,
        brand: "EcoExplorer",
        item: "30°F Recycled Sleeping Bag",
        description: "The EcoExplorer 30°F Recycled Sleeping Bag is perfect for environmentally-conscious campers. Made from 100% recycled materials, this sleeping bag offers a comfortable fit with a semi-rectangular shape. It features a durable, water-resistant outer shell and a soft, warm interior lining, ensuring a cozy night's sleep.",
        img: sleep2,
        price: "$99.99",
        category: "sleeping bag",
    },
    {
        id: 11,
        brand: "MountainDreamer",
        item: "20°F Mummy Sleeping Bag",
        description: "The MountainDreamer 20°F Mummy Sleeping Bag is designed for cold-weather camping. It features a cozy mummy shape to maximize warmth, a durable water-resistant shell, and a soft, breathable liner. The sleeping bag also includes a draft collar and a zippered pocket for small essentials.",
        img: sleep3,
        price: "$89.99",
        category: "sleeping bag",
    },
    {
        id: 12,
        brand: "SummitLite",
        item: "40°F Ultralight Sleeping Bag",
        description: "The SummitLite 40°F Ultralight Sleeping Bag is perfect for backpackers and hikers who need to keep their pack weight to a minimum. Weighing only 1.8 pounds, this sleeping bag offers excellent warmth-to-weight ratio with its high-loft insulation and compact stuff sack. The ergonomic design ensures a comfortable night's sleep.",
        img: sleep4,
        price: "$119.99",
        category: "sleeping bag",
    },
    {
        id: 13,
        brand: "TrailMaster",
        item: "Stainless Steel Camping Mug",
        description: "The TrailMaster Stainless Steel Camping Mug is designed for durability and convenience in the great outdoors. Made from high-grade stainless steel, this mug is lightweight and resistant to rust and corrosion. Its single-wall construction ensures easy cleaning and quick drying. The comfortable, ergonomic handle makes it easy to hold even with gloves on. Perfect for enjoying your favorite hot or cold beverages by the campfire.",
        img: kitchen1,
        price: "$14.99",
        category: "kitchen",
    },
    {
        id: 14,
        brand: "PeakFlame",
        item: "Portable Camping Stove",
        description: "The PeakFlame Portable Camping Stove is the ultimate solution for cooking in the wilderness. This compact and lightweight stove features a powerful burner that can boil water in just a few minutes, making it perfect for preparing meals on the go. Its sturdy construction ensures stability on uneven surfaces, and the adjustable flame control allows for precise cooking. The stove is compatible with most propane canisters and includes a convenient carrying case for easy transport.",
        img: kitchen2,
        price: "$49.99",
        category: "kitchen",
    },
    {
        id: 15,
        brand: "CampChef",
        item: "5-Piece Nonstick Camping Pan Set",
        description: "The CampChef 5-Piece Nonstick Camping Pan Set is essential for any outdoor cooking enthusiast. This versatile set includes five pans of varying sizes, all made from durable, lightweight aluminum with a nonstick coating for easy cooking and cleanup. The set features foldable handles for compact storage and transport, and the pans nest together to save space in your backpack. Perfect for frying, sautéing, and boiling, this pan set ensures you can prepare a variety of meals on your camping trips.",
        img: kitchen3,
        price: "$59.99",
        category: "kitchen",
    },
    {
        id: 16,
        brand: "TrailEats",
        item: "8-Piece Camping Plate & Silverware Set",
        description: "The TrailEats 8-Piece Camping Plate & Silverware Set is perfect for dining in the great outdoors. This set includes two durable, BPA-free plates, two stainless steel forks, two knives, and two spoons. The plates are lightweight yet sturdy, designed to withstand outdoor conditions, and are easy to clean. The stainless steel silverware is rust-resistant and ergonomically designed for comfortable use. The set comes with a compact carrying case, making it easy to pack and transport on your camping trips.",
        img: kitchen4,
        price: "$24.99",
        category: "kitchen",
    },
    {
        id: 17,
        brand: "VanLife",
        item: "Adventure T-Shirt",
        description: "The VanLife Adventure T-Shirt is a must-have for camping enthusiasts who love to explore the great outdoors. Made from soft, breathable cotton, this shirt features a stylish design inspired by the freedom and adventure of van life. Perfect for your next adventure, whether you're hitting the trails or just relaxing by the campfire. Available in various sizes and colors.",
        img: clothes1,
        price: "$19.99",
        category: "clothes",
    },
    {
        id: 18,
        brand: "EcoTrail",
        item: "All-Weather Jacket",
        description: "The EcoTrail All-Weather Camping Jacket is designed for outdoor enthusiasts who need reliable protection against the elements. Made from eco-friendly, recycled materials, this jacket is both sustainable and durable. It features a waterproof and windproof outer shell, a breathable inner lining, and adjustable cuffs and hood to keep you comfortable in any weather. Multiple pockets provide ample storage for your essentials, and the lightweight design ensures easy packing. Perfect for hiking, camping, and all your outdoor adventures.",
        img: clothes2,
        price: "$89.99",
        category: "clothes",
    },
    {
        id: 19,
        brand: "SummitPro",
        item: "Waterproof Hiking Boots",
        description: "The SummitPro Waterproof Hiking Boots are built for durability and comfort on the toughest trails. These boots feature a rugged, waterproof leather upper and a breathable mesh lining to keep your feet dry and comfortable. The reinforced toe cap and heel provide extra protection, while the cushioned insole and padded collar ensure all-day comfort. The high-traction rubber outsole offers excellent grip on various terrains, making these boots ideal for hiking, backpacking, and all your outdoor adventures.",
        img: clothes3,
        price: "$129.99",
        category: "clothes",
    },
    {
        id: 20,
        brand: "TrailShade",
        item: "Bucket Hat",
        description: "The TrailShade Camping Bucket Hat is the perfect accessory for your outdoor adventures. Made from lightweight, breathable fabric, this hat provides excellent sun protection with its wide brim and UPF 50+ rating. The hat features a moisture-wicking sweatband to keep you cool and comfortable, and an adjustable chin strap to ensure a secure fit even on windy days. Its packable design allows you to easily fold and store it in your backpack. Ideal for camping, hiking, fishing, and any outdoor activity.",
        img: clothes4,
        price: "$24.99",
        category: "clothes",
    },
    
]
