import { toAscii } from '@/utils'

export const categoryDescriptions: Record<string, string> = {
    'narava': 'Odkrijte zanimive članke o naravi, kako ohranjati zdravje in kako živeti v skladu s prirojenim okoljem.',
    'praznovanje': 'Odkrijte zanimive članke o praznovanjih, kako organizirati praznovanja in kako zabaviti svoje prijatelje in družino.',
    'zabava': 'Odkrijte zanimive članke o zabavi, kako zabaviti svoje prijatelje in družino.',
    'zdravje': 'Odkrijte zanimive članke o zdravju, kako ohranjati zdravje in kako živeti v skladu s prirojenim okoljem.',
    'ekonomija': 'Odkrijte zanimive članke o ekonomiji, kako zarabiti denar in kako živeti v skladu s prirojenim okoljem.',
    }

// Helper function to get description
export function getCategoryDescription(category: string): string {
    const asciiCategory = toAscii(category)
    // Find the matching category by converting both sides to ASCII
    const matchingCategory = Object.keys(categoryDescriptions).find(
        key => toAscii(key) === asciiCategory
    )
    return matchingCategory ? categoryDescriptions[matchingCategory] : 'Opis kategorije ni na voljo.'
} 