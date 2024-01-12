import React from 'react'
import './eventspricingSection.scss'

function EventspricingSection() {
  return (
    <section id='eventspricingSection'>
        <div className="eventspricingSectionUpBox">
            <span>Devoted to wonderful beauty</span>
            <p>Events Pricing</p>
        </div>
        <div className="eventspricingSectionDownBox">
            <div className="eventspricingBox">
                <div><p>$16</p><span> per table</span></div>
                <p>Birthday Events</p>
                <span>Lorem ipsum dolor sit amet laudem partem perfecto per</span>
            <button>Shop now</button>
            </div>
            <div className="eventspricingBox">
                <div><p>$31 </p><span> per table</span></div>
                <p>Wedding Events</p>
                <span>Lorem ipsum dolor sit amet laudem partem perfecto per</span>
            <button>Shop now</button>
            </div>
            <div className="eventspricingBox">
                <div><p>$52 </p><span> per table</span></div>
                <p>Party Events</p>
                <span>Lorem ipsum dolor sit amet laudem partem perfecto per</span>
            <button>Shop now</button>
            </div>
        </div>
    </section>
  )
}

export default EventspricingSection