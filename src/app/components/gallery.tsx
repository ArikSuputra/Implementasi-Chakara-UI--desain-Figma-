// import { useEffect, useState } from 'react';

// export const useGalleryImages = (type: string) => {
//     const [filenames, setFilenames] = useState<string[]>([]);

//     useEffect(() => {
//         fetch(`/api/images?type=${type}`)
//             .then((response) => response.json())
//             .then((data) => setFilenames(data))
//             .catch((error) => console.error('Error fetching images:', error));
//     }, [type]);

//     return filenames;
// };

// src/hooks/useGalleryImages.ts
import { useEffect, useState } from 'react';

export const useGalleryImages = (type: string) => {
    const [filenames, setFilenames] = useState<string[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch(`/api/images?type=${type}`);
                const data = await response.json();
                setFilenames(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }

        fetchImages();
    }, [type]);

    return filenames;
};
