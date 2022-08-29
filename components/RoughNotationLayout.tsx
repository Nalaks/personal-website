import { FC } from 'react'
import { RoughNotation } from 'react-rough-notation'
import { RoughNotationHighlightProps } from '../types/types'

const RoughNotationHighlight: FC<RoughNotationHighlightProps> = ({
  color,
  children
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(
    30 * (children as React.ReactNode[]).length
  )

  return (
    <RoughNotation
      type='highlight'
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}>
      {children}
    </RoughNotation>
  )
}

export default RoughNotationHighlight
