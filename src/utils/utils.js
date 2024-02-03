/**
 * Changes the repo titles from having dashes to being capitalized words with spaces
 * @param {string} input 
 * @returns 
 */
export const transformTitle = (input) => input
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');


/**
 * Returns a function to give to an `onClick` attribute that opens a link.
 * @param {string} url 
 * @returns {(e: Event) => void}
 */
export const handleLinkClick = (url) => {
  return (
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(url, '_blank');
    }
  )
};