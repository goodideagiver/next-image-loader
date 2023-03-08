type Props = {
  children: React.ReactNode
  condition: boolean
  wrapper: (children: React.ReactNode) => React.ReactNode
}

const ConditionalWrapper = ({ children, condition, wrapper }: Props) => {
  return condition ? wrapper(children) : children
}
export default ConditionalWrapper
