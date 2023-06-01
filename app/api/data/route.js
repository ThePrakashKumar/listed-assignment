import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    cardData: {
      totalRevenues: "$2,129,430",
      totalTransaction: "1,520",
      totalLikes: "9,721",
      totalUsers: "892",
    },
    lineChart: [
      {
        duration: "May-June 2021",
        guest: [200, 400, 200, 300, 220, 430],
        user: [100, 400, 150, 450, 180, 230],
      },
      {
        duration: "June-July 2021",
        guest: [250, 400, 100, 200, 420, 330],
        user: [400, 100, 350, 450, 280, 230],
      },
    ],
    pieChart: [
      {
        duration: "May-June 2021",
        products: [14, 31, 55],
      },
      {
        duration: "June-July 2021",
        products: [24, 31, 45],
      },
    ],
  };

  return NextResponse.json({ data });
}
