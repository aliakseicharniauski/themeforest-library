import React from 'react'
import Icon from '../Icon'
import { ControlDirectionWrapper } from './styled'

/* TODO: realize logic, add disabled state */
const ControlDirection = ({ direction }: { direction: string }) => (
    <ControlDirectionWrapper>
        {direction === 'left' && <Icon.IconArrowLeft />}
        {direction === 'right' && <Icon.IconArrowRight />}
    </ControlDirectionWrapper>
)

export default ControlDirection
