import React from 'react'

const Footer = ({completeTaskCount = 0, activeTaskCount = 3}) => {
  return (
    <>
      {completeTaskCount + activeTaskCount > 0 && (
      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          {
            completeTaskCount > 0 && (
              <>
                Tuyệt vời bạn đã hoàn thành {completeTaskCount} việc {activeTaskCount > 0 && `, còn ${activeTaskCount} nữa thôi!!!`}
                
              </>
            )
          }
          {completeTaskCount === 0 && activeTaskCount > 0 && (
            <>
              Hãy bắt đầu làm {activeTaskCount} nhiệm vụ nào!
            </>
          )}
        </p>
      </div>
    )}
    </>
  )
}

export default Footer
