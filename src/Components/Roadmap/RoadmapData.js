// Resources data.
import {
  SiGeeksforgeeks,
  SiCodechef,
  SiLeetcode,
  SiTopcoder,
  SiCodeforces,
} from "react-icons/si";

import img1 from "./Image/img1.webp";
import img2 from "./Image/img2.webp";
import img3 from "./Image/img3.webp";
import img4 from "./Image/img4.webp";
import img5 from "./Image/img5.webp";
import img6 from "./Image/img6.webp";
import img7 from "./Image/img7.webp";
import img9 from "./Image/img9.webp";
import img10 from "./Image/img10.webp";

import { BiBulb, BiBot } from "react-icons/bi";
import { AiOutlineCodeSandbox } from "react-icons/ai";
const data = [
  {
    date: "",
    img: img1,
    header: "Basics of Programming",
    text: [
      {
        content: "1. C++ Basic",
        link: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
      },
      {
        content: "2. I/O , Conditional Statements",
        link: "https://www.geeksforgeeks.org/basic-input-output-c/",
      },
      {
        content: "3. Loops, Pointers",
        link: " https://www.geeksforgeeks.org/cpp-loops/",
      },
      {
        content: "4. Array, String",
        link: " https://www.geeksforgeeks.org/arrays-and-strings-in-c/",
      },
      {
        content: "5. Function",
        link: "https://www.geeksforgeeks.org/functions-in-cpp/",
      },
    ],
  },
  {
    date: "",

    img: img2,

    header: "Time and Space Complexity",
    text: [
      {
        content: "1. Time Complexity",
        link: "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/",
      },
      {
        content: "2. Space Complexity",
        link: " https://www.geeksforgeeks.org/g-fact-86/",
      },
      {
        content: "3. Asymptotic Notation",
        link: "https://www.geeksforgeeks.org/types-of-asymptotic-notations-in-complexity-analysis-of-algorithms/",
      },
    ],
  },
  {
    date: "",
    img: img3,
    header: "STL",
    text: [
      {
        content: "1. Vector and Pair",
        link: "https://www.youtube.com/playlist?list=PLauivoElc3gh3RCiQA82MDI-gJfXQQVnn",
      },
      {
        content: "2. Iterator",
        link: "https://www.geeksforgeeks.org/iterators-c-stl/",
      },
      {
        content: "3. Map and Set",
        link: " https://www.geeksforgeeks.org/set-vs-map-c-stl/",
      },
      {
        content: "4. Stack, Queue, Dequeue and Priority-Queue",
        link: "https://www.geeksforgeeks.org/c-programs-gq/stack-queue-cc-programs-gq/",
      },
      {
        content: "5. STL algorithms",
        link: " https://www.geeksforgeeks.org/c-magicians-stl-algorithms/",
      },
      {
        content: "6. Sorting and Comparator Function ",
        link: "https://www.geeksforgeeks.org/sort-c-stl/",
      },
    ],
  },
  {
    date: "",
    img: img4,
    header: "Array's Algorithm",
    text: [
      {
        content: "1. Kadane's Algorithm",
        link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
      },
      {
        content: "2. Window Sliding",
        link: "https://www.geeksforgeeks.org/window-sliding-technique/",
      },
      {
        content: "3. Dutch National Flag Algorithm",
        link: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/",
      },
      {
        content: "4. Searching and Sorting",
        link: "https://www.geeksforgeeks.org/sorting-algorithms/",
      },
      {
        content: "5. Prefix and Suffix sum",
        link: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
      },
      {
        content: "6. Two Pointer",
        link: "https://www.geeksforgeeks.org/two-pointers-technique/",
      },
      {
        content: "7. 2D Array",
        link: "https://www.programiz.com/cpp-programming/multidimensional-arrays",
      },
    ],
  },
  {
    date: "",

    img: img5,

    header: "String's Algorithm",
    text: [
      {
        content: "1. KMP Algorithm",
        link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
      },
      {
        content: "2. Rabin Karp Algorithm",
        link: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
      },
      {
        content: "3. Z-Algorithm",
        link: "https://www.geeksforgeeks.org/z-algorithm-linear-time-pattern-searching-algorithm/",
      },
    ],
  },
  {
    date: "",
    img: img6,
    header: "Greedy Algorithm",
    text: [
      {
        content: "1. Activity Selection Problems",
        link: "https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/",
      },
      {
        content: "2. Egyptian Fraction",
        link: "https://www.geeksforgeeks.org/greedy-algorithm-egyptian-fraction/",
      },
      {
        content: "3. Job Sequencing",
        link: "https://www.geeksforgeeks.org/job-sequencing-problem/",
      },
      {
        content: "4. Minimum Swaps for Bracket Balancing",
        link: "https://www.geeksforgeeks.org/minimum-swaps-bracket-balancing/",
      },
    ],
  },
  {
    date: "",
    img: img7,
    header: "Binary Search",
    text: [
      {
        content: "1. Binary Search I ",
        link: "https://www.youtube.com/live/SpS9dMj0B_Y?feature=share",
      },
      {
        content: "2. Binary Search II",
        link: "https://www.youtube.com/live/B4t3NB0478k?feature=share",
      },
      {
        content: "3. Binary Search III",
        link: "https://www.youtube.com/live/Kb3KOTQfjew?feature=share",
      },
      {
        content: "4. Ternary Search",
        link: "https://cp-algorithms.com/num_methods/ternary_search.html",
      },
    ],
  },
  {
    date: "",
    img: img9,
    header: "Number Theory",
    text: [
      {
        content: "1. Euclid's GCD algorithm and Extended Euclid algorithm",
        link: "https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/",
      },
      {
        content: "2. Basic Modular Arithmetic",
        link: "https://www.geeksforgeeks.org/modular-arithmetic/",
      },
      {
        content: "3. Modular Exponentiation",
        link: "https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/",
      },
      {
        content: "4. Modular Inverse",
        link: "https://www.geeksforgeeks.org/multiplicative-inverse-under-modulo-m/",
      },
      {
        content: "5. Prime Factorization of a number",
        link: "https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/",
      },
      {
        content: "6. Sieve of Eratosthenes",
        link: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/",
      },
      {
        content: "7. Segmented Sieve",
        link: "https://www.geeksforgeeks.org/segmented-sieve/",
      },
      {
        content: "8. Euler Totient Function",
        link: "https://www.geeksforgeeks.org/eulers-totient-function/",
      },
      {
        content: "9. Fermat's Little Theorem",
        link: "https://www.geeksforgeeks.org/fermats-little-theorem/",
      },
      {
        content: "10. NCR mod p calculation",
        link: "https://www.geeksforgeeks.org/introduction-and-dynamic-programming-solution-to-compute-ncrp/",
      },
      {
        content: "11. Lucas Theorem",
        link: "https://www.geeksforgeeks.org/compute-ncrp-using-lucas-theorem/",
      },
      {
        content: "12. Chinese Remainder Theorem",
        link: "https://cp-algorithms.com/algebra/chinese-remainder-theorem.html",
      },
      {
        content: "13. Mobius Function",
        link: "https://www.geeksforgeeks.org/program-mobius-function/",
      },
    ],
  },
  {
    date: "",
    img: img10,
    header: "Recursion and Backtracking",
    text: [
      {
        content: "1. Recursion and Backtracking Basics",
        link: "https://www.scaler.com/topics/data-structures/recursion-and-backtracking/",
      },
      {
        content: "2. Subset Sum",
        link: "https://takeuforward.org/data-structure/subset-sum-sum-of-all-subsets/",
      },
      {
        content: "3.  Combination Sum",
        link: "https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/",
      },
      {
        content: "4.	N queens Problem",
        link: "https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/",
      },
      {
        content: "5. Sudoku Solver",
        link: "https://takeuforward.org/data-structure/sudoku-solver/",
      },
      {
        content: "6. Rat in a Maze",
        link: "https://takeuforward.org/data-structure/rat-in-a-maze/",
      },
    ],
  },
  {
    date: "",

    img: img1,

    header: "Bit Manipulation",
    text: [
      {
        content: "1. Number System",
        link: "https://www.geeksforgeeks.org/number-system-in-maths/",
      },
      {
        content: "2. Bitwise Operators",
        link: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
      },
      {
        content: "3. Bit Masking",
        link: "https://www.scaler.com/topics/data-structures/bit-masking/",
      },
      {
        content: "4. Binary Exponentiation",
        link: "https://cp-algorithms.com/algebra/binary-exp.html",
      },
    ],
  },
  {
    date: "",
    img: img2,
    header: "Dynamic Programming",
    text: [
      {
        content: "1. Introduction",
        link: "https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/",
      },
      {
        content: "2. One Dimensional DP",
        link: "https://www.hackerearth.com/practice/notes/dynamic-programming-for-beginners-part-2-1-d/",
      },
      {
        content: "3. Two Dimensional DP",
        link: "https://www.hackerearth.com/practice/algorithms/dynamic-programming/2-dimensional/tutorial/",
      },
      {
        content: "2. Digit DP",
        link: "https://codeforces.com/blog/entry/53960",
      },
      {
        content: "3. DP on Trees",
        link: "https://codeforces.com/blog/entry/20935",
      },
      {
        content: "4. DP with Bitmask",
        link: "https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/",
      },
      { content: "5. SOS DP", link: "https://codeforces.com/blog/entry/45223" },
      {
        content: "6. Beginner to Advanced",
        link: "https://codeforces.com/blog/entry/325",
      },
      {
        content: "7. Non Trivial DP Tricks and Techniques",
        link: "https://codeforces.com/blog/entry/47764",
      },
      {
        content: "8. CF Blog",
        link: "https://codeforces.com/blog/entry/67679",
      },
    ],
  },
  {
    date: "",
    img: img3,
    header: "Graph",
    text: [
      {
        content: "1. Graph Representation",
        link: "https://www.geeksforgeeks.org/graph-and-its-representations/",
      },
      {
        content: "2. DFS",
        link: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
      },
      {
        content: "3. BFS",
        link: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
      },
      {
        content: "4. Bipartite Graph",
        link: "https://www.geeksforgeeks.org/bipartite-graph/",
      },
      {
        content: "5. Topological Sort",
        link: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/",
      },
      {
        content: "6. Kruskal's Algorithm",
        link: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
      },
      {
        content: "7. Prims's Algorithm",
        link: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
      },
      {
        content: "8. Dijkstra 's Algorithm",
        link: "https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/",
      },
      {
        content: "9. Bellman Ford's Algorithm",
        link: "https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/",
      },
      {
        content: "10. Floyd Warshall's Algorithm",
        link: "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/",
      },
      {
        content: "11. Bridge",
        link: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
      },
      {
        content: "12. Articulation Points",
        link: "https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
      },
      {
        content: "13. Strongly Connected Components (SCC)",
        link: "https://www.geeksforgeeks.org/strongly-connected-components/",
      },
      {
        content: "14. Tarjan's Algorithm for SCC",
        link: "https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/",
      },
    ],
  },
  {
    date: "",
    img: img4,
    header: "Tree",
    text: [
      {
        content: "1. Traversal Techniques",
        link: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
      },
      {
        content: "2. Binary Tree, BST, Balanced Binary Tree",
        link: "https://www.scaler.com/topics/data-structures/binary-tree-in-data-structure/",
      },
      {
        content: "3. Binary Lifting",
        link: "https://cp-algorithms.com/graph/lca_binary_lifting.html",
      },
      {
        content: "4. Bridges, BridgeTree, Cutpoits, SCC, DFS Tree",
        link: "https://codeforces.com/blog/entry/68138",
      },
      {
        content: "5. Dynamic Programming on tree",
        link: "https://usaco.guide/gold/dp-trees?lang=cpp",
      },
      {
        content: "6. 2K Decomposition of tree (and Lowest Common Ancestor)",
        link: "https://www.hackerrank.com/topics/lowest-common-ancestor",
      },
      {
        content: "7. Kruskal Reconstruction Tree (KRT) (IOI Werewolf trick)",
        link: "https://mzhang2021.github.io/cp-blog/kruskal/",
      },
      {
        content: "8. Set Merging (with linear height merging)",
        link: "https://codeforces.com/blog/entry/44351",
      },
      {
        content: "9. O(N^2) Distribution DP",
        link: "https://codeforces.com/blog/entry/44351",
      },
      {
        content:
          "10. 'Re-rooting' tree DP (where you DP twice, once going down and once propagating from top)",
        link: "https://www.youtube.com/watch?v=7_huTWwl5jM",
      },
      {
        content: "11. Centroid Decomposition",
        link: "https://usaco.guide/plat/centroid?lang=cpp",
      },
      {
        content: "12. Heavy-Light Decomposition",
        link: "https://cp-algorithms.com/graph/hld.html",
      },
      {
        content: "13. UFDS on tree (See: CEOI 2017 Streets)",
        link: "https://visualgo.net/en/ufds",
      },
    ],
  },
  {
    date: "",
    img: img9,
    header: "Miscellaneous Topics",
    text: [
      {
        content: "1. Trie",
        link: "https://www.geeksforgeeks.org/trie-insert-and-search/",
      },
      {
        content: "2. Segment Tree & Fenwick Tree",
        link: "https://cp-algorithms.com/data_structures/segment_tree.html",
      },
      {
        content: "3. Game Thoery",
        link: "https://usaco.guide/adv/game-theory?lang=cpp",
      },
      {
        content: "4. Probability & Expectation",
        link: "https://www.youtube.com/watch?v=U_h3IjreRek",
      },
      {
        content: "5. Matrix Exponention",
        link: "https://usaco.guide/plat/matrix-expo?lang=cpp",
      },
      {
        content: "6. Euler Tour",
        link: "https://usaco.guide/gold/tree-euler?lang=cpp",
      },
    ],
  },
  {
    date: "",
    header: "Useful Links",
    img: img10,
    icon: "FiLink",
    text: [
      {
        content: "Codeforces ",
        link: "https://codeforces.com/",
        icon: <SiCodeforces className="inline" />,
      },
      {
        content: "Codechef",
        link: "https://www.codechef.com/",
        icon: <SiCodechef className="inline " />,
      },
      {
        content: "LeetCode",
        link: "https://leetcode.com/",
        icon: <SiLeetcode className="inline " />,
      },
      {
        content: "Atcoder ",
        link: "https://atcoder.jp/",
        icon: <AiOutlineCodeSandbox className="inline " />,
      },
      {
        content: "GeeksForGeeks ",
        link: "https://www.geeksforgeeks.org/",
        icon: <SiGeeksforgeeks className="inline " />,
      },
      {
        content: "OEIS",
        link: "https://oeis.org/",
        icon: <AiOutlineCodeSandbox className="inline " />,
      },
      {
        content: "USACO Guide",
        link: "https://usaco.guide/",
        icon: <BiBot className="inline " />,
      },
      {
        content: "CP-Algorithms",
        link: "https://cp-algorithms.com/",
        icon: <BiBulb className="inline " />,
      },
      {
        content: "Topcoder",
        link: "https://www.topcoder.com/",
        icon: <SiTopcoder className="inline " />,
      },
      {
        content: "CSES",
        link: "https://cses.fi/problemset/list/",
        icon: <AiOutlineCodeSandbox className="inline " />,
      },
    ],
  },
];

export default data;
