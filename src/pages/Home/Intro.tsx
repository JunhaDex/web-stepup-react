import SocialLinks from '@/components/display/SocialLinks.tsx'

export default function Intro() {
  return (
    <header className="home-intro">
      <div className="home-intro-content">
        <div>
          <h1 className="text-4xl font-bold mb-2">김준하</h1>
          <p className="text-xl mb-4">Front End Developer</p>
          <p className="text-text-2 mb-8 md:mb-0">
            찾아주셔서 감사합니다. 소통을 통해 함께 만들어가는 개발을
            지향합니다.
          </p>
        </div>
        <SocialLinks />
      </div>
    </header>
  )
}
