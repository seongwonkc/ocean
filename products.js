const productsData = [
  { id:"OP_SOL_001", name:"Osol's Book of 'What If?'", category:"workbook", trait:"openness", age_range:"6-8", tagline:"Drawing and logic prompts that have no single right answer.", description:"This workbook uses minimalist Minhwa-style illustrations to invite children to complete unfinished scenes. By rewarding unusual rather than correct responses, it helps build a child's comfort with novelty and creative risk-taking.", price_tier:"mid" },
  { id:"OP_SOL_002", name:"The Imugi's Secret Garden", category:"storybook", trait:"openness", age_range:"5-7", tagline:"A story about looking closer to find the magic in the everyday.", description:"Osol explores a garden where objects change depending on how you look at them. This narrative encourages children to embrace multiple perspectives and find joy in intellectual curiosity.", price_tier:"low" },
  { id:"OP_SOL_003", name:"The Explorer's Perspective Kit", category:"kit", trait:"openness", age_range:"7-10", tagline:"A DIY kaleidoscopic lens set for observing nature in new ways.", description:"Children build their own viewing lenses using different filters and prisms to re-color their environment. Includes a field journal to record observations.", price_tier:"premium" },
  { id:"CO_CHIU_001", name:"Chiu's Mountain Map", category:"workbook", trait:"conscientiousness", age_range:"5-8", tagline:"A visual progress tracker for building daily routines.", description:"Styled as an ancient scroll, this workbook lets children place stone stickers to track their own tasks. It introduces self-organization and the satisfaction of seeing a long-term project through.", price_tier:"mid" },
  { id:"CO_CHIU_002", name:"The Great Bridge of Stones", category:"storybook", trait:"conscientiousness", age_range:"5-7", tagline:"How small, steady actions can solve the biggest problems.", description:"While the other siblings are distracted, Chiu stays focused on repairing a bridge stone by stone. This story validates the quiet heroics of persistence.", price_tier:"low" },
  { id:"CO_CHIU_003", name:"The Master Architect Game", category:"game", trait:"conscientiousness", age_range:"7-10", tagline:"A tile-placement game that rewards careful planning and sequence.", description:"Players build a traditional Korean fortress following a specific blueprint. The game mechanics prioritize deliberation over speed, helping children practice impulse control and strategic thinking.", price_tier:"mid" },
  { id:"EX_EPA_001", name:"Epa's Festival of Riddles", category:"workbook", trait:"extraversion", age_range:"6-8", tagline:"Interactive speech and storytelling prompts to build social confidence.", description:"This workbook guides children through Social Missions like interviewing a family member or performing a short riddle. It provides a structured way for kids to practice social initiation and verbal expression.", price_tier:"mid" },
  { id:"EX_EPA_002", name:"The Day Epa Lost His Laugh", category:"storybook", trait:"extraversion", age_range:"5-7", tagline:"Learning how to listen as well as you lead.", description:"When Epa loses his voice before a big festival, he discovers new ways to connect with his siblings through quiet observation.", price_tier:"low" },
  { id:"EX_EPA_003", name:"The Dokkaebi's Invitation Kit", category:"kit", trait:"extraversion", age_range:"5-10", tagline:"A box of craft materials for hosting your own family tea ceremony or playdate.", description:"Includes invitation cards, decorative Hanji napkins, and a Host's Guide. By putting the child in charge of the event, it encourages social leadership and hospitality.", price_tier:"premium" },
  { id:"AG_ARU_001", name:"Aru's Kindness Compass", category:"workbook", trait:"agreeableness", age_range:"5-8", tagline:"Exercises in naming feelings and finding win-win solutions.", description:"Through Social Detective stories, children help the OCEAN characters navigate disagreements. It builds the vocabulary needed for empathy and teaches children how to maintain harmony without losing their own voice.", price_tier:"mid" },
  { id:"AG_ARU_002", name:"The Seonnyeo and the Grumpy Cloud", category:"storybook", trait:"agreeableness", age_range:"5-7", tagline:"A story about the power of seeing the world through someone else's eyes.", description:"Aru meets a storm cloud that everyone else is avoiding. By asking the right questions and listening deeply, she helps the cloud find peace.", price_tier:"low" },
  { id:"AG_ARU_003", name:"The Village of Harmony Game", category:"game", trait:"agreeableness", age_range:"6-10", tagline:"A cooperative board game where players must share resources to succeed.", description:"Inspired by traditional Korean village life, players must trade tools and help each other finish a harvest. It rewards altruistic moves and interpersonal coordination.", price_tier:"mid" },
  { id:"NE_NURI_001", name:"Nuri's Color of Weather", category:"workbook", trait:"negative_emotionality", age_range:"5-8", tagline:"A daily emotional check-in book for naming and understanding big feelings.", description:"Uses the metaphor of weather to help children track their reactivity. By identifying triggers early, children learn that intense emotions are manageable and temporary.", price_tier:"mid" },
  { id:"NE_NURI_002", name:"Nuri and the Thousand Faces", category:"storybook", trait:"negative_emotionality", age_range:"5-7", tagline:"Validating the deep sensitivity that makes the world feel big.", description:"Nuri is a fox who feels everything very intensely. The story helps children understand that being sensitive is a strength of perception, while providing a character-coded language for self-soothing.", price_tier:"low" },
  { id:"NE_NURI_003", name:"The Calm-Glow Lantern Kit", category:"kit", trait:"negative_emotionality", age_range:"5-10", tagline:"A paper lantern craft that includes a guided breathing exercise.", description:"A Hanji lantern kit with a simple LED light. Parents use the included Breathing Cards to help children pace their breath with the lantern's slow pulse, turning a craft into a regulation tool.", price_tier:"premium" },
  { id:"MULTI_001", name:"The OCEAN Family Profile Set", category:"kit", trait:"multi", age_range:"5-10", tagline:"A physical chart for the home to visualize how each family member grows.", description:"A high-end wooden board with five character sliders. It lets the family talk about their personality landscape in a visual, non-judgmental way, making the Big Five a shared family language.", price_tier:"premium" },
  { id:"MULTI_002", name:"Guardian Archetype Cards", category:"game", trait:"multi", age_range:"7-10", tagline:"Explore different personality profiles based on historical and mythic figures.", description:"A deck of cards showing how different trait combinations create Guardians — like the Architect or the Diplomat. It fosters social sharing and helps children see their unique profile as a strength.", price_tier:"mid" },
  { id:"MULTI_003", name:"The Five Peaks Adventure", category:"storybook", trait:"multi", age_range:"5-10", tagline:"The flagship ensemble story where every character's strength is essential.", description:"An adventure where the five siblings must combine their unique strengths to save their village. It celebrates the diversity of the Big Five and shows how the traits work together.", price_tier:"mid" },
  { id:"PG_CORE_001", name:"Growing with OCEAN: The Parent Manual", category:"parent_guide", trait:"multi", age_range:"5-10", tagline:"A warm, research-backed guide to supporting your child's natural temperament.", description:"Explains the science of the Big Five in plain language. Offers practical strategies for arranging home life and routines to help each trait flourish naturally.", price_tier:"mid" },
  { id:"DEST_001", name:"The Future Healer's Journey", category:"workbook", trait:"multi", age_range:"7-10", tagline:"For children who show an early interest in caring for others and precise work.", description:"Combines exercises for persistence with social empathy, using play-based scenarios to strengthen these foundational traits.", price_tier:"mid" },
  { id:"DEST_002", name:"The Master Creator's Studio", category:"kit", trait:"multi", age_range:"7-10", tagline:"For children who show deep sensitivity and a love for building new things.", description:"A premium art kit that encourages children to use their deep sensitivity as a source of creative novelty, providing professional-grade materials for high-concept projects.", price_tier:"premium" },
  { id:"PG_ENV_002", name:"Designing for Growth: The Intentional Home", category:"parent_guide", trait:"multi", age_range:"5-10", tagline:"How to arrange your home environment to support healthy personality development.", description:"A guide for parents on creating physical spaces that nudge trait growth — focus-friendly zones, expressive play areas, and more.", price_tier:"mid" }
];

const categoryLabels = {
  workbook: "Workbook",
  storybook: "Storybook",
  game: "Game",
  kit: "Activity Kit",
  parent_guide: "Parent Guide"
};

const priceTierLabels = {
  low: "Entry",
  mid: "Standard",
  premium: "Premium"
};

function getProductsForTraits(scores) {
  const traits = ['openness','conscientiousness','extraversion','agreeableness','negative_emotionality'];

  // Sort traits by score to find highest
  const sorted = [...traits].sort((a, b) => scores[b] - scores[a]);
  const topTwo = sorted.slice(0, 2);

  // Get 2 products per top trait + 1 multi
  let recommended = [];

  topTwo.forEach(trait => {
    const traitProducts = productsData
      .filter(p => p.trait === trait)
      .slice(0, 2);
    recommended = recommended.concat(traitProducts);
  });

  // Add one multi product
  const multiProduct = productsData.find(p => p.trait === 'multi' && p.id === 'MULTI_003');
  if (multiProduct) recommended.push(multiProduct);

  // Add parent guide
  const parentGuide = productsData.find(p => p.id === 'PG_CORE_001');
  if (parentGuide) recommended.push(parentGuide);

  // Deduplicate
  const seen = new Set();
  return recommended.filter(p => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}
