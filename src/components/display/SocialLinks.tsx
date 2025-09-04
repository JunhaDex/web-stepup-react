import LanguageSelect from '@/components/inputs/LanguageSelect.tsx'

export default function SocialLinks() {
  return (
    <ul className="social-links">
      <li className="link-item">
        <a
          className="link"
          href="https://github.com/JunhaDex/web-stepup-react"
          target="_blank"
        >
          <i className="icon icon-github" />
        </a>
      </li>
      <li className="link-item">
        <a
          className="link"
          href="https://velog.io/@decent_summer/posts"
          target="_blank"
        >
          <i className="icon icon-velog" />
        </a>
      </li>
      <li>
        <LanguageSelect value="en" />
      </li>
    </ul>
  )
}
