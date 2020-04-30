import React, { useState, useEffect } from "react"
import Link from "next/link"

const CookiesConsent = () => {
	const [active, setActive] = useState("")

	useEffect(() => {
		setTimeout(() => {
			if (!localStorage.getItem("cookieBannerDisplayed"))
				setActive("cookie-container active")
		}, 3000)
	}, [])

	const handleClick = (e) => {
		setActive("cookie-container")
		localStorage.setItem("cookieBannerDisplayed", "true")
	}
	return (
		<div className={active ? active : "cookie-container"}>
			<p>
				We use cookies to optimize our site content, to provide social media
				features and to analyze our traffic. We also share information about
				your use of our site with our social media, advertising and analytics
				partners.
			</p>
			<button className="cookie-btn" onClick={handleClick}>
				<span>Accept</span>	
			</button>
		</div>
	)
}

export default CookiesConsent
