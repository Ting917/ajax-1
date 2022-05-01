getCSS.onclick = () => {
    //创建 XMLHttpRequest 对象
    const request = new XMLHttpRequest()
    //调用对象的open对象
    request.open('GET', '/style.css') //readyState = 1
    // 监听对象的onreadystatechange事件
    request.onreadystatechange = () => {
        // 下载完成，但不知道是成功还是失败
        if (request.readyState === 4) {
            console.log('下载完成')
            // http状态码以2开头都为成功
            if (request.status >= 200 && request.status < 300) {
                //创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插到头部
                document.head.appendChild(style)
            } else {
                alert('加载CSS失败')
            }
        }
    }
    //调用对象的send方法
    request.send() //readyState = 2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status < 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.head.appendChild(script)
            } else {
                alert('加载JS失败')
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // JSON.parse 可以把符合JSON语法的字符串转换成JS对应类型的数据
                console.log(request.response)
                const object = JSON.parse(request.response)
                myName.textContent = object.name
                console.log(object)
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4)
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item.id
                    xxx.appendChild(li);
                })
                n += 1;
            }
    }
    request.send()
}