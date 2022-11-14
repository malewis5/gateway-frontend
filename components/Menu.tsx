import Image from 'next/image';
import Link from 'next/link';

const menu = [
  {
    name: 'subs',
    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
  {
    name: 'salads',

    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
  {
    name: 'coffee',

    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
  {
    name: 'breakfast',
    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
  {
    name: 'beverages',
    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
  {
    name: 'all items',
    imageUrl:
      'https://www.chipotle.com/content/dam/chipotle/global/menu/meal-types/cmg-10001-burrito/web-desktop/order.png',
  },
];

export default function Menu() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 uppercase overflow-hidden"
    >
      {menu.map((item) => (
        <Link href={`order/${item.name}`}>
          <li
            key={item.name}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white group cursor-pointer"
          >
            <div className="w-full space-x-6 p-6 flex flex-col items-center justify-center">
              <Image
                alt="sub"
                src={item.imageUrl}
                width={300}
                height={170}
                className="group-hover:scale-110"
              />
              <div className="w-full text-center">
                <h3 className="text-2xl">{item.name}</h3>
                <div className="group-hover:opacity-100 opacity-0 flex items-center justify-center gap-1">
                  <h2>Order</h2>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
