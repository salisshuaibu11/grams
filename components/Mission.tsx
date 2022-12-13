import Image from "next/image"
import { useState } from "react"

function MissionSVG(props: any) {
  const { className, hasEntered } = props;
  return (
    <div className={className}>
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M72.4998 15.9534C103.699 15.9534 129.009 41.2639 129.009 72.5004C129.009 103.736 103.699 129.009 72.4998 129.009C41.2635 129.009 15.9538 103.736 15.9538 72.5004C15.9538 41.2639 41.2635 15.9534 72.4998 15.9534ZM72.4998 0C112.534 0 145 32.4664 145 72.5004C145 112.534 112.534 145 72.4998 145C32.4666 145 0 112.534 0 72.5004C0 32.4664 32.4666 0 72.4998 0Z" fill={`${hasEntered ? "#17BF5F" : "white"}`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M72.4998 37.8724C91.6219 37.8724 107.09 53.3781 107.09 72.5003C107.09 91.6224 91.6219 107.129 72.4998 107.129C53.3778 107.129 37.8714 91.6224 37.8714 72.5003C37.8714 53.3781 53.3778 37.8724 72.4998 37.8724ZM72.4998 28.1049C97.0261 28.1049 116.895 47.9739 116.895 72.5003C116.895 97.0272 97.0261 116.895 72.4998 116.895C47.9728 116.895 28.1053 97.0272 28.1053 72.5003C28.1053 47.9739 47.9728 28.1049 72.4998 28.1049Z" fill={`${hasEntered ? "#17BF5F" : "white"}`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M72.4998 52.3728C83.6078 52.3728 92.6282 61.3922 92.6282 72.5005C92.6282 83.6083 83.6078 92.6289 72.4998 92.6289C61.3919 92.6289 52.3713 83.6083 52.3713 72.5005C52.3713 61.3922 61.3919 52.3728 72.4998 52.3728ZM72.4998 46.7055C86.7388 46.7055 98.2946 58.262 98.2946 72.5005C98.2946 86.7395 86.7388 98.2947 72.4998 98.2947C58.2608 98.2947 46.7056 86.7395 46.7056 72.5005C46.7056 58.262 58.2608 46.7055 72.4998 46.7055Z" fill={`${hasEntered ? "#17BF5F" : "white"}`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M72.9844 67.5057C72.9844 67.4683 72.9471 67.431 72.9471 67.431L50.0602 44.5434V30.1924C50.0602 29.1123 49.6502 28.105 48.9048 27.3607L24.8624 3.0575C23.7069 1.90091 21.9922 1.56513 20.5011 2.16208C19.0103 2.79633 18.041 4.24952 18.041 5.88925V17.8916H5.74035C4.10024 17.8916 2.64648 18.8616 2.05009 20.3895C1.4164 21.88 1.75199 23.5962 2.90746 24.7509L27.2108 49.054C27.9562 49.8002 28.9627 50.2106 30.0437 50.2106H44.3945L67.2814 73.0968C67.2814 73.0968 67.3187 73.1341 67.3558 73.1341C68.9215 74.6252 71.2697 74.6623 72.8725 73.1341C74.5126 71.5313 74.4753 69.0711 72.9844 67.5057Z" fill={`${hasEntered ? "white" : "#17BF5F"}`}/>
      </svg>
    </div>
  )
}

function VisionSVG(props: any) {
  const { className, hasEntered } = props;
  return (
    <div className={className}>
      <svg width="212" height="174" viewBox="0 0 212 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M106.022 159.794C63.5699 159.794 26.7908 119.405 15.9188 106.214C26.7908 93.0228 63.4839 52.6333 106.022 52.6333C148.43 52.6333 185.209 93.0228 196.081 106.214C185.209 119.448 148.559 159.794 106.022 159.794ZM210.645 102.089C208.755 99.5112 163.641 38.6692 106.022 38.6692C48.3607 38.6692 3.24483 99.5112 1.3547 102.089C-0.451567 104.538 -0.451567 107.89 1.3547 110.339C3.24483 112.917 48.3607 173.759 106.022 173.759C163.641 173.759 208.755 112.917 210.645 110.339C212.452 107.89 212.452 104.538 210.645 102.089Z" fill={hasEntered ? '#17BF5F' : 'white'}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M106.022 134.186C90.5974 134.186 78.0503 121.639 78.0503 106.214C78.0503 90.7887 90.5974 78.2846 106.022 78.2846C121.405 78.2846 133.95 90.7887 133.95 106.214C133.95 121.639 121.405 134.186 106.022 134.186ZM106.022 64.2774C82.9057 64.2774 64.0861 83.097 64.0861 106.214C64.0861 129.33 82.9057 148.151 106.022 148.151C129.138 148.151 147.914 129.33 147.914 106.214C147.914 83.097 129.138 64.2774 106.022 64.2774Z" fill={hasEntered ? '#17BF5F' : "white"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M106.022 118.073C112.509 118.073 117.838 112.745 117.838 106.214C117.838 99.6831 112.509 94.3991 106.022 94.3991C99.4911 94.3991 94.1626 99.6831 94.1626 106.214C94.1626 112.745 99.4911 118.073 106.022 118.073Z" fill={hasEntered ? 'white' : "#17BF5F"} />
        <path fillRule="evenodd" clipRule="evenodd" d="M103.271 -4.57764e-05C106.409 -4.57764e-05 108.944 2.53516 108.944 5.67033V28.1433C108.944 31.2355 106.409 33.8137 103.271 33.8137C100.136 33.8137 97.6008 31.2355 97.6008 28.1433V5.67033C97.6008 2.53516 100.136 -4.57764e-05 103.271 -4.57764e-05Z" fill={hasEntered ? 'white' : "#17BF5F"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M152.469 11.6439C155.176 13.1899 156.122 16.6713 154.574 19.3785L143.317 38.8411C141.771 41.5483 138.289 42.4945 135.582 40.9032C132.877 39.3571 131.931 35.8758 133.477 33.1707L144.736 13.706C146.282 10.9987 149.761 10.0526 152.469 11.6439Z" fill={hasEntered ? 'white' : "#17BF5F"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M54.0741 11.6439C51.3669 13.1899 50.4229 16.6713 52.0119 19.3785L63.2259 38.8411C64.7741 41.5483 68.2964 42.4945 71.0036 40.9032C73.7109 39.3571 74.6118 35.8758 73.0657 33.1707L61.8518 13.706C60.2627 10.9987 56.7814 10.0526 54.0741 11.6439Z" fill={hasEntered ? 'white' : "#17BF5F"}/>
      </svg>
    </div>
  )
}

export function Mission() {
  const [mission, setMission] = useState(false);
  const [vision, setVision] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mt-16 space-y-16">
          
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div
              onMouseEnter={() => setMission(true)}
              onMouseLeave={() => setMission(false)}
              className={`hover:scale-110 transition-all ease-linear delay-100 lg:ml-10 ml-0 ${mission ? 'bg-green-300' : 'bg-green-600'} rounded-md text-center aspect-w-5 aspect-h-3 overflow-hidden mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4`}
            >
              <MissionSVG className="w-100 h-100 transition-all ease-linear delay-200 flex justify-center items-center" hasEntered={mission}/>
            </div>
            <div
              className='flex-auto xl:col-start-1 lg:row-start-1 lg:col-span-7 xl:col-span-6 text-white bg-secondary'
            >
              <div className="h-80 flex justify-center items-center">
                <div className="w-[80%] text-left space-y-10">
                  <h1 className="font-bold text-4xl uppercase">Our mission</h1>
                  <p className="text-lg">To provide unbanked farmers with the digital tools and financial services they need to help them make their farms more profitable, and build better livelihoods for themselves, their families, and their communities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            
            <div
              onMouseEnter={() => setVision(true)}
              onMouseLeave={() => setVision(false)}
              className={`hover:scale-110 transition-all ease-linear delay-100 lg:mr-10 mr-0 mt-6 lg:mt-0 xl:col-start-3 lg:row-start-1 lg:col-span-5 xl:col-span-4 text-center aspect-w-5 aspect-h-3 overflow-hidden ${vision ? 'bg-primaryLight' : 'bg-primary'}`}
            >
              <VisionSVG className="w-100 h-100 transition-all ease-linear delay-200 flex justify-center items-center" hasEntered={vision}/>
            </div>
            <div
              className='flex-auto xl:col-start-7 lg:row-start-1 lg:col-span-5 xl:col-span-6 bg-primary text-white'
            >
              <div className="h-80 flex justify-center items-center">
                <div className="w-[80%] text-right space-y-10">
                  <h1 className="font-bold text-4xl uppercase">our vision</h1>
                  <p className="text-lg">To empower unbanked smallholder farmers in rural Africa with access to affordable, high-quality financial services, enabling them to improve their livelihoods and build a better future for themselves and their communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/*
  {features.map((feature, featureIdx) => (
    <div
      key={feature.name}
      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
    >
      <div
        className={classNames(
          featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
          'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
        )}
      >
        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
      </div>
      <div
        className={classNames(
          featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
          'flex-auto xl:col-start-1 lg:row-start-1 lg:col-span-7 xl:col-span-6'
        )}
      >
        <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
        </div>
      </div>
    </div>
  ))}
*/