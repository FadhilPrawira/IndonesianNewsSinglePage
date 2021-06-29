// TRIBUNNEWS.COM
// Some examples of what you can do with custom bypasses:
domainBypass("tribunnews.com", () => {
	// Triggered on example.com and subdomains (e.g. www.example.com)
	ensureDomLoaded(() => {
		// Triggered as soon as the DOM is ready
	
	})
  pattern = "(^https://([a-z]*)[.]tribunnews.com[/]([a-z]*)/)((?:19|20)\\d\\d)/(0?[1-9]|1[012])/([12][0-9]|3[01]|0?[1-9])[/]"
  // Regex pattern
  if(window.location.href.includes(window.location.href.match(pattern)[0])) {
    if(!window.location.href.includes("?page=all")){
      // If the url didn't have "?page=all" in the end of url, do this
      safelyNavigate(window.location.href.concat("?page=all"))
    } else{
      // If the url have "?page=2" or "?page=4" in the end of url, do this
      safelyNavigate(window.location.href.replace("?page=","?page=all#page"))
    }
  }

})

// I don't know how to use this

domainBypass(/example\.(com|org)/, () => {
	// Triggered if the regex matches any part of the hostname
})
hrefBypass(/example\.(com|org)/, () => {
	// Triggered if the regex matches any part of the URL
})
// Enjoy! Your changes will be saved automatically.


// KOMPAS.COM
// Some examples of what you can do with custom bypasses:
domainBypass("kompas.com", () => {
	// Triggered on example.com and subdomains (e.g. www.example.com)
	ensureDomLoaded(() => {
		// Triggered as soon as the DOM is ready
	
	})
	// You can use ifElement to check if an element is available via document.querySelector:
	ifElement("a.paging__link.paging__link--show[href]", a => {
		
		safelyNavigate(a.href)
		// safelyNavigate asserts that given URL is valid before navigating and returns false if not
	}, () => {
		// Optional function to be called if the given element is not available
	})
	// You can also use awaitElement to wait until an element is available via a query selector:
	awaitElement("a.paging__link.paging__link--show[href]", a => {
		safelyAssign(a.href)
		// safelyAssign is the same as safelyNavigate but skips the
		// "You're almost at your destination" page, should the user have it enabled
	})
})
domainBypass(/example\.(com|org)/, () => {
	// Triggered if the regex matches any part of the hostname
})
hrefBypass(/example\.(com|org)/, () => {
	// Triggered if the regex matches any part of the URL
})
// Enjoy! Your changes will be saved automatically.
