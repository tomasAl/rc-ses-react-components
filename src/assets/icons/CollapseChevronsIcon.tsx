function CollapseChevronsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.354 14.3541C11.4005 14.3077 11.4374 14.2526 11.4626 14.1919C11.4877 14.1312 11.5007 14.0661 11.5007 14.0004C11.5007 13.9347 11.4877 13.8696 11.4626 13.8089C11.4374 13.7482 11.4005 13.6931 11.354 13.6466L8.35403 10.6466C8.30759 10.6002 8.25245 10.5633 8.19175 10.5381C8.13105 10.513 8.06599 10.5 8.00028 10.5C7.93457 10.5 7.86951 10.513 7.80881 10.5381C7.74811 10.5633 7.69296 10.6002 7.64653 10.6466L4.64653 13.6466C4.55271 13.7405 4.5 13.8677 4.5 14.0004C4.5 14.1331 4.55271 14.2603 4.64653 14.3541C4.74035 14.448 4.8676 14.5007 5.00028 14.5007C5.13296 14.5007 5.26021 14.448 5.35403 14.3541L8.00028 11.7073L10.6465 14.3541C10.693 14.4006 10.7481 14.4375 10.8088 14.4627C10.8695 14.4878 10.9346 14.5008 11.0003 14.5008C11.066 14.5008 11.131 14.4878 11.1917 14.4627C11.2524 14.4375 11.3076 14.4006 11.354 14.3541ZM5.35403 1.64653L8.00028 4.2934L10.6465 1.64653C10.7403 1.55271 10.8676 1.5 11.0003 1.5C11.133 1.5 11.2602 1.55271 11.354 1.64653C11.4478 1.74035 11.5006 1.8676 11.5006 2.00028C11.5006 2.13296 11.4478 2.26021 11.354 2.35403L8.35403 5.35403C8.30759 5.40052 8.25245 5.4374 8.19175 5.46256C8.13105 5.48772 8.06599 5.50067 8.00028 5.50067C7.93457 5.50067 7.86951 5.48772 7.80881 5.46256C7.74811 5.4374 7.69296 5.40052 7.64653 5.35403L4.64653 2.35403C4.55271 2.26021 4.5 2.13296 4.5 2.00028C4.5 1.8676 4.55271 1.74035 4.64653 1.64653C4.74035 1.55271 4.8676 1.5 5.00028 1.5C5.13296 1.5 5.26021 1.55271 5.35403 1.64653Z'
        fill='#087FB2'
      />
    </svg>
  )
}

CollapseChevronsIcon.defaultProps = {
  className: undefined,
}

export default CollapseChevronsIcon
