import { NextResponse } from 'next/server';

export async function GET() {
  const liveGames = [
    {
      title: "BORDERLAND",
      status: "Live Now",
      link: "https://borderland.thebeaconhq.com"
    }
  ];

  return NextResponse.json({
    success: true,
    data: liveGames
  });
}
