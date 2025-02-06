export const formatName = (name: string): string => {
    return name
      .trim() // Removes leading and trailing spaces from the string
      .split(/\s+/) // Split the name by words
      .map((word: string) => 
        // For each word, handle possible hyphens inside
      word.split('-').map(
          (slice: string) => slice.charAt(0).toUpperCase() + slice.slice(1).toLowerCase()
        ).join('-') // Join the slices with hyphens
      )
      .join(' '); // Join the words with spaces
  }
