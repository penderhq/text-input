import React, {Component} from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@pndr/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import TextInput from '../../src'

class Demo extends Component {

    state = {
        value: 'Luke Skywalker'
    }

    render() {
        return <Canvas>
            <Heading>
                Default
            </Heading>
            <Box>
                <TextInput
                    value={this.state.value}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </Box>
            <Paragraph>
                With placeholder
            </Paragraph>
            <Box>
                <TextInput
                    placeholder={'With placeholder'}
                />
            </Box>
            <Paragraph>
                Small size
            </Paragraph>
            <Box>
                <TextInput
                    value={this.state.value}
                    size={'sm'}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
            <Paragraph>
                Disabled
            </Paragraph>
            <Box>
                <TextInput
                    value={this.state.value}
                    disabled={true}
                    onChange={({value}) => {

                        this.setState({
                            value
                        })
                    }}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
