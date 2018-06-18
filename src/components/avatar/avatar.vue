<script>
const prefix = 'm-avatar'
const sizeMap = ['xs', 'sm', 'md', 'lg', 'hg']

export default { 
    name: 'MAvatar',
    functional: true,
    props: {
        size: {
            type: [String, Number],
            default: 'sm',
        },
        bgColor: {
	        type: String,
	        default: 'transparent',
        },
        shadow: {
	        type: Number,
	        default: 0,
        }
    },
    render (h, { data, props, children }) {
        console.log(data)
        console.log(props)
        console.log(children)
	    data.staticClass = `${prefix} ${data.staticClass || ''} `
	    data.style = data.style || {}

	    if (sizeMap.indexOf(props.size)){
		    data.staticClass += props.size
	    } else {
		    Object.assign(data.style, {
			    height: props.size,
			    width: props.size
		    })
	    }

        if (){

        }

	    data.staticClass = data.staticClass.trim()

        return h('div', data, children)
    }
}
</script>
