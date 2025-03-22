import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'
import { visit } from 'unist-util-visit'

/**
 * Injects ads after specific headings based on reading time
 * - If reading time > 2 minutes: shows after 1st, 3rd, and 5th headings
 * - If reading time ≤ 2 minutes: shows only after 1st heading
 */
export function remarkAds() {
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage)
    const minutes = readingTime.minutes
    
    // Track headings to find the 1st, 3rd, and 5th ones
    let headingCount = 0
    const headingsToAddAdsAfter = minutes > 2 ? [1, 3, 5] : [1]
    
    // Use visit to find all heading nodes
    visit(tree, 'heading', (node, index, parent) => {
      headingCount++
      
      // Check if we should add an ad after this heading
      if (headingsToAddAdsAfter.includes(headingCount) && parent && typeof index === 'number') {
        // Create an HTML node with our ad content
        const adNode = {
          type: 'html',
          value: '<div class="ad-container"><div class="ad-content">ADS WILL COME HERE</div></div>'
        }
        // Insert the ad node after the current heading
        parent.children.splice(index + 1, 0, adNode)
      }
    })
  }
} 