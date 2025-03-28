function parseString(str: string) {
  const htmlArr: Array<string> = []
  let currentIndex = 0

  while (currentIndex < str.length) {
    // let's check the first character, if it is a "<" then we know we are starting a tag
    // else the string starts with text
    if (str[currentIndex] === '<') {
      const tagStart = currentIndex
      const tagEnd = str.indexOf('>', tagStart)
      const openTag = str.slice(tagStart, tagEnd + 1)
      console.log('HTML OPEN: ', openTag)
      htmlArr.push(openTag)
      currentIndex = tagEnd
    }

    // if it is not a "<" then we know we are starting a text
    // let's find the next "<" to know where the text ends
    else {
      const textStart = currentIndex
      const textEnd = str.indexOf('<', textStart)
      const text = str.slice(textStart, textEnd)
      console.log('TEXT: ', text)
      htmlArr.push(text)
      currentIndex = textEnd - 1
    }

    // if (char === '<') {
    //   let tag = ''
    //   let tagEnd = false
    //   let tagIndex = currentIndex + 1

    //   while (!tagEnd) {
    //     if (str[tagIndex] === '>') {
    //       tagEnd = true
    //     } else {
    //       tag += str[tagIndex]
    //     }
    //     tagIndex++
    //   }

    //   htmlArr.push(tag)
    //   currentIndex = tagIndex
    // } else {
    //   let text = ''
    //   let textEnd = false
    //   let textIndex = currentIndex

    //   while (!textEnd) {
    //     if (str[textIndex] === '<') {
    //       textEnd = true
    //     } else {
    //       text += str[textIndex]
    //     }
    //     textIndex++
    //   }

    //   htmlArr.push(text)
    //   currentIndex = textIndex
    // }

    currentIndex++
  }

  return htmlArr
}

export default function ParserPage() {
  const htmlStr =
    '<div className="parser-container"><header><h1>String Parser</h1><p>Enter text below to parse</p></header><div><h3>This is an H3</h3><p><a href="http://www.google.com">This is a link inside a paragraph</a></p></div><h2>Parsing Results</h2><h3>An 3 element</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum sedvelit quam perferendis corporis nesciunt soluta ab dolorum vero impedit minus, alias aperiam consectetur, amet repudiandae assumenda veniam veritatis?</p><img src="whatever.jpg" /><p>Lorem ipsum dolor, sit amet consectetur adipisicinga <a href="http://www.facebook.com">Go to Facebook Bro</a> elit. Esse consequatur dolorem dignissimos voluptate, officiis ea exercitationem totam ducimus, minus, repellendus culpa aliquam. Ea eius eligendi atque, repudiandae vitae repellendus autem.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div>'

  const htmlArr = parseString(htmlStr)

  console.log(htmlArr)

  return <p>Holi... :🚀</p>
}

/*
  <div className="parser-container">
    <header>
      <h1>
        String Parser
      </h1>
      <p>
        Enter text below to parse.
      </p>
    </header>
    <div>
      <h3>
        This is an H3
      </h3>
      <p>
        <a href="http://www.google.com">
          This is a link inside a paragraph.
        </a>
      </p>
    </div>
    <h2>
      Parsing Results
    </h2>
    <h3>
      An 3 element.
    </h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eum sedvelit quam perferendis corporis nesciunt soluta ab dolorum vero impedit minus, alias aperiam consectetur, amet repudiandae assumenda veniam veritatis?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicinga
      <a href="http://www.facebook.com">
        Go to Facebook Bro
      </a>
      elit. Esse consequatur dolorem dignissimos voluptate, officiis ea exercitationem totam ducimus, minus, repellendus culpa aliquam. Ea eius eligendi atque, repudiandae vitae repellendus autem.
    </p>
    <ul>
      <li>
        Item 1
      </li>
      <li>
        Item 2
      </li>
      <li>
        Item 3
      </li>
    </ul>
  </div>
*/
