<script>
import { isHexColor, isStyleUnit } from 'es-treasure'
const prefix = 'm-avatar'
const sizeMap = ['xs', 'sm', 'md', 'lg', 'hg']

export default {
    name: 'MAvatar',
    functional: true,
    props: {
        size: {
            type: [String, Number],
            default: 'sm'
        },
	    color: {
		    type: String,
		    default: '#000000'
	    },
        bgColor: {
	        type: String,
	        default: '#ffffff'
        },
        shadow: {
	        type: Number,
	        default: 0
        }
    },
    render (h, { data, props, children }) {
    	const { size, bgColor, color, shadow} = props
        console.log(size)
	    console.log(bgColor)
        console.log(props)
        console.log(children)

	    data.staticClass = `${prefix} ${data.staticClass || ''} `
	    data.style = data.style || {}

	    if (sizeMap.indexOf(size)) {
		    data.staticClass += `${size} `
	    } else if (isStyleUnit(size)) {
		    Object.assign(data.style, {
			    height: size,
			    width: size
		    })
	    }

        if (isHexColor(bgColor)) {
	        Object.assign(data.style, {
		        backgroundColor: bgColor
	        })
        } else {
	        data.staticClass += `bg-${bgColor} `
        }

	    if (isHexColor(color)) {
		    Object.assign(data.style, {
			    color
		    })
	    } else {
		    data.staticClass += `color-${color} `
	    }

	    data.staticClass = data.staticClass.trim()

        return h('div', data, children)
    }
}
</script>
