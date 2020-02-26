import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test(`doesn't alter a string under 100 characters`, ()=>{
    expect(shortenText(shortText)).toHaveLength(29)
})

describe(`shortens text over 100 characters and adds 3 periods at the end`, ()=>{
    test('shortens text over 100 characters', ()=>{
        const shortened = shortenText(longText)
        expect(shortened).not.toHaveLength(longText.length)
        
    })

    test('adds 3 periods at the end of shortened text', ()=>{
        const shortened = shortenText(longText)
        expect(shortened.slice(-3)).toBe('...')
    })
})

test(`wordCount should correctly count the number of words in a sentence`, ()=>{
    expect(wordCount(posts)).toBe(233)
})

test(`first post should have a property 'displayName'`, ()=>{
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test(`removes any post with no matching user`, ()=>{
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})