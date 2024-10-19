import React from 'react';

function StrokeDiet() {
    return ( 
        <>
            <div className="container mt-5 mb-5 pb-5">
                <h1 className="text-center">DIETARY ADVICE</h1>
                <div className="row mt-5">
                    <div className="col">
                        <h3>1. Hydrating Foods</h3>
                        <ul>
                            <li>Water-rich fruits and vegetables: Include foods like watermelon, cucumber, oranges, strawberries, cantaloupe, and tomatoes. These fruits and vegetables have a high water content and are excellent for staying hydrated.</li>
                            <li>Coconut water: Coconut water is an excellent source of natural electrolytes like potassium and magnesium, which are lost through sweating. It also provides quick hydration.</li>
                            <li>Cucumber and lettuce: Both are refreshing and cooling foods, helping your body maintain a normal temperature in hot conditions.</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>2. Electrolyte-Rich Foods</h3>
                        <ul>
                            <li>Bananas: Rich in potassium, bananas help replenish lost electrolytes and prevent muscle cramps, which can be a symptom of heat exhaustion.</li>
                            <li>Leafy greens: Spinach, kale, and other leafy greens contain magnesium, which aids in muscle relaxation and fluid balance, reducing the risk of heat-related illnesses.</li>
                            <li>Yogurt: A good source of calcium, potassium, and sodium, yogurt helps replenish electrolytes and provides a cooling effect on the body. Greek yogurt, in particular, can be included as a snack or breakfast.</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h3>3. Cooling Spices and Herbs</h3>
                        <ul>
                            <li>Mint: Mint has a natural cooling effect on the body. It can be added to drinks, salads, or even consumed as mint tea to help cool down.</li>
                            <li>Fennel seeds: Known for their cooling properties, fennel seeds can be consumed after meals or steeped in water to help reduce body heat.</li>
                            <li>Coriander and cumin: These spices help lower body temperature when added to food or drinks, making them useful in combating heat stress.</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>4. Light, Easily Digestible Meals</h3>
                        <ul>
                            <li>Salads: Opt for salads with fresh vegetables, leafy greens, and fruits. Light meals are easier to digest and don’t generate as much internal heat as heavy, greasy foods.</li>
                            <li>Soups: Cold soups like gazpacho, made with fresh vegetables, are refreshing and hydrating. They’re a good way to include both water and nutrients in your diet.</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h3>5. Foods to Avoid</h3>
                        <ul>
                            <li>Avoid heavy, greasy, or fried foods: These foods take longer to digest, generating more internal heat and making the body work harder to cool down.</li>
                            <li>Limit spicy foods: While a small amount of spices like cumin and coriander can be cooling, overly spicy foods can raise your body temperature and contribute to dehydration.</li>
                            <li>Minimize processed snacks: Salty, processed foods can cause dehydration by increasing your body’s need for water. Instead, opt for natural snacks like fruits and nuts.</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>6. Cold Beverages</h3>
                        <ul>
                            <li>Herbal teas: Iced teas made from chamomile, peppermint, or hibiscus are cooling and hydrating, helping to prevent heat-related illnesses.</li>
                            <li>Fresh fruit juices: Watermelon, orange, and cucumber juices provide hydration and essential vitamins while helping to lower body temperature.</li>
                            <li>Buttermilk (Chaas): A traditional Indian drink, buttermilk is cooling, hydrating, and contains probiotics to aid digestion and keep the body cool.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

export default StrokeDiet;