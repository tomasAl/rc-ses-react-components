function CheckBoldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='#06A0D4' />
      <rect
        className='checkbox-stroke'
        x='0.5'
        y='0.5'
        width='23'
        height='23'
        rx='3.5'
        stroke='#06A0D4'
      />
      <path
        d='M18.5326 9.0313L10.5326 17.0313C10.4629 17.1012 10.3801 17.1567 10.2889 17.1946C10.1978 17.2324 10.1 17.2519 10.0013 17.2519C9.90259 17.2519 9.80485 17.2324 9.71369 17.1946C9.62252 17.1567 9.53973 17.1012 9.47005 17.0313L5.97005 13.5313C5.90029 13.4615 5.84495 13.3787 5.80719 13.2876C5.76943 13.1964 5.75 13.0987 5.75 13.0001C5.75 12.9014 5.76943 12.8037 5.80719 12.7125C5.84495 12.6214 5.90029 12.5386 5.97005 12.4688C6.03982 12.399 6.12264 12.3437 6.21379 12.3059C6.30494 12.2682 6.40264 12.2488 6.5013 12.2488C6.59996 12.2488 6.69766 12.2682 6.78881 12.3059C6.87996 12.3437 6.96279 12.399 7.03255 12.4688L10.0019 15.4382L17.4713 7.97005C17.6122 7.82915 17.8033 7.75 18.0026 7.75C18.2018 7.75 18.3929 7.82915 18.5338 7.97005C18.6747 8.11095 18.7539 8.30204 18.7539 8.5013C18.7539 8.70056 18.6747 8.89165 18.5338 9.03255L18.5326 9.0313Z'
        fill='white'
      />
    </svg>
  )
}

CheckBoldIcon.defaultProps = {
  className: undefined,
}

export default CheckBoldIcon
