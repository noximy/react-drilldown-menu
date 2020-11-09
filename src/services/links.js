export function getCurrentLinks(links, path) {
  /**
   * Scenarios
   * page-1  -> ''  // Simple case with no node
   * node-1/page-3 -> 'node-1'  // Simple case with one node followed a leaf
   * node-2/page-1 -> ''  // No node-2 is in the tree
   * node-1/page-5 -> 'node-1'  // No page-5 is in the tree
   * node-1 -> '' // leaf node is absent
   * node-1/page-3/general-info -> 'node-1'  // addition path after page-3
   * node-1/node-1.1/page-3 -> 'node-1/node-1.1'  // multi node
   */

  const nodes = path.split('/');

  let newLinks = { ...links };
  let newPathArr = [];
  let nodeInfo = null;

  for (let node of nodes) {
    if (newLinks[node] && newLinks[node].links) {
      nodeInfo = { label: newLinks[node].label, icon: newLinks[node].icon };
      newLinks = { ...newLinks[node].links };
      newPathArr.push(node);
    } else {
      break;
    }
  }

  const newPath = newPathArr.join('/');

  return { newLinks, nodeInfo, newPath };
}

export function getCorrectPath(links, path) {
  const pathA = path.substring(1);
  const nodes = pathA.split('/');

  let newNodeArr = [];
  for (let node of nodes) {
    if (links[node] && links[node].links) {
      newNodeArr.push(node);
    } else {
      break;
    }
  }

  return newNodeArr.join('/');
}
