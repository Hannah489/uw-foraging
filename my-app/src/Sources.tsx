import React, { Component } from 'react';
import "./Sources.css";

type EditorProps = {
};

type EditorState = {
};


/** Component that allows the user to view a marker. */
export class Sources extends Component<EditorProps, EditorState> {
  render = (): React.JSX.Element => {
    
    return <div>
      <h1>Project Sources: </h1>
      <ul id="text">
        <li>Cook, L. (2018). These underrated wild berries are worth foraging for. Seattle Magazine. https://seattlemag.com/food-and-culture/these-underrated-wild-berries-are-worth-foraging/ </li>
        <li>Edible Plant. (2018). Crabapples: The winter sweet-tart. Four Season Foraging. https://www.fourseasonforaging.com/blog/2018/2/19/crabapples-the-winter-sweet-tart</li>
        <li>Elisabeth C. Miller Library. On the edibility of fiddleheads. https://depts.washington.edu/hortlib/pal/on-the-edibility-of-fiddleheads/#:~:text=The%20fiddleheads%20of%20cinnamon%20fern,probably%20best%20to%20avoid%20them</li>
        <li>Freed, J. (2014). Three wild strawberries of the pacific northwest. Washington Native Plant Society. https://www.wnps.org/blog/wild-strawberries-of-pnw</li>
        <li>Jarvie, M. (2017). Five ways to eat dandelions. Michigan State University. https://www.canr.msu.edu/news/five_ways_to_eat_dandilions </li>
        <li>Krohn, E. Salal. Washington Office of Superintendent of Public Instruction. https://ospi.k12.wa.us/sites/default/files/2023-10/salal.pdf</li>
        <li>Lushootseed. Č̓alas. https://tulaliplushootseed.com/encyclopedia/c%cc%93al%c9%99s/</li>
        <li>Portland Nursery. Laurus nobilis: Bay laurel. https://www.portlandnursery.com/herbs/bay-laurel</li>
        <li>Northern Gardener. (2021). Plant profile: Lovely lemon balm. Minnesota State Horticultural Society. https://northerngardener.org/lemon-balm/</li>
        <li>UW Campus Tree Tours. Strawberry Tree. https://sites.google.com/uw.edu/schoolofenvironmentalandforest/brockman-memorial-tree-tour/strawberry-tree?authuser=0 </li>
      </ul>
    </div>;
  };
}