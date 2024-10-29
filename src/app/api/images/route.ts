// import path from 'path';
// import fs from 'fs/promises';

// export async function getImages(directories: string[]): Promise<Record<string, string[]>> {
//   try {
//     const allFilenames: Record<string, string[]> = {};

//     for (const directory of directories) {
//       const directoryPath = path.join(process.cwd(), 'public', 'images', directory);
//       const filenames = await fs.readdir(directoryPath);
//       allFilenames[directory] = filenames;
//     }

//     return allFilenames;
//   } catch (error) {
//     console.error('Error reading directory:', error);
//     return {};
//   }
// }

// src/app/api/images/route.ts
import path from 'path';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || 'gallery'; // Defaults to 'gallery' if no type is provided

    const directoryPath = path.join(process.cwd(), 'public', 'images', type);
    const filenames = await fs.readdir(directoryPath);

    return NextResponse.json(filenames);
  } catch (error) {
    console.error('Error reading directory:', error);
    return NextResponse.json([], { status: 500 });
  }
}
