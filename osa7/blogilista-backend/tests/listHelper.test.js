const { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes } = require('../utils/list_helper')

const blogs = [
  {
    id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
]

const blogsWithOneAuthor = [
  {
    id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
]

describe('dummy tests', () => {
  test('dummy returns one', () => {
    expect(dummy(blogs)).toBe(1)
  })
})

describe('total likes', () => {
  test('when list has only one blog equals the likes of that', () => {
    const result = totalLikes([blogs[0]])
    expect(result).toBe(7)
  })
  test('of empty list is zero', () => {
    const result = totalLikes([])
    expect(result).toBe(0)
  })
  test('of a bigger list is calculated right', () => {
    const result = totalLikes(blogs)
    expect(result).toBe(36)
  })
})

describe('favorite blogs', () => {
  test('when list has only one blog equals to that', () => {
    const blog = blogs[0]
    const result = favoriteBlog([blog])
    expect(result).toEqual(blog)
  })
  test('of a empty list returns undefined', () => {
    const result = favoriteBlog([])
    expect(result).toBe(undefined)
  })
  test('of a bigger list returns correct blog', () => {
    const result = favoriteBlog(blogs)
    const correctFavorite = {
      id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12
    }
    expect(result).toEqual(correctFavorite)
  })
})

describe('author with most blogs', () => {
  test('when list has only one blog equals to respective author', () => {
    const blog = blogs[0]
    const result = mostBlogs([blog])
    expect(result).toEqual({
      author: blog.author,
      blogs: 1
    })
  })
  test('when list has only blogs from one author equals to respective author', () => {
    const result = mostBlogs(blogsWithOneAuthor)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
  test('of a empty list returns undefined', () => {
    const result = mostBlogs([])
    expect(result).toBe(undefined)
  })
  test('of a bigger list returns correct author', () => {
    const result = mostBlogs(blogs)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('author with most likes', () => {
  test('when list has only one blog equals to respective author', () => {
    const blog = blogs[0]
    const result = mostLikes([blog])
    expect(result).toEqual({
      author: blog.author,
      likes: blog.likes
    })
  })
  test('when list has only blogs from one author equals to respective author', () => {
    const result = mostLikes(blogsWithOneAuthor)
    expect(result).toEqual({
      author: 'Robert C. Martin',
      likes: 12
    })
  })
  test('of a empty list returns undefined', () => {
    const result = mostLikes([])
    expect(result).toBe(undefined)
  })
  test('of a bigger list returns correct author and likes', () => {
    const result = mostLikes(blogs)
    expect(result).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17
    })
  })
})
