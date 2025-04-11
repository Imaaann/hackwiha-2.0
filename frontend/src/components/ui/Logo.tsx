import { JSX } from "react";

function Logo(props: JSX.IntrinsicAttributes & { size: number }) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 165 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M83 7L147.952 44.5V119.5L83 157L18.0481 119.5V44.5L83 7Z" fill="white" />
      <path
        d="M11.5529 41.5387L82.5 0.57735L153.447 41.5387V123.461L82.5 164.423L11.5529 123.461V41.5387Z"
        stroke="white"
      />
      <path
        d="M117.79 89.9516L117.773 89.9355L117.787 89.9495C117.483 89.6401 117.142 89.3601 116.767 89.1105C116.638 89.1095 116.507 89.0835 116.383 89.0292C116.181 88.9434 116.023 88.799 115.916 88.6264C115.316 88.341 114.687 88.1575 114.05 88.0675C113.493 87.9905 113.109 87.4771 113.187 86.9213C113.264 86.3666 113.778 85.9803 114.331 86.0572C114.966 86.1475 115.597 86.3102 116.208 86.5457C116.305 86.1029 116.359 85.6514 116.359 85.1933C116.358 84.1947 116.123 83.1852 115.623 82.2377C115.051 81.1523 114.217 80.3057 113.236 79.725C112.378 79.217 111.409 78.9163 110.413 78.8501C110.34 79.7532 110.124 80.6596 109.747 81.5344C109.525 82.0489 108.928 82.2876 108.413 82.0661C107.898 81.8447 107.659 81.2478 107.881 80.7321C108.242 79.8899 108.413 79.0194 108.415 78.1587C108.415 78.0349 108.409 77.9124 108.404 77.7896C108.337 76.598 107.939 75.4442 107.266 74.464C106.592 73.4828 105.649 72.6773 104.474 72.1717C103.632 71.8081 102.759 71.6376 101.899 71.6376C100.253 71.6376 98.6571 72.2715 97.4543 73.3904C97.6801 74.1567 97.805 74.9664 97.805 75.8044C97.805 76.3644 97.3502 76.8181 96.79 76.8181C96.2288 76.8181 95.774 76.3644 95.774 75.8044C95.774 74.9817 95.6227 74.2022 95.3468 73.4773C94.8791 72.253 94.0508 71.2043 92.9921 70.462C91.9338 69.7196 90.6526 69.2855 89.2594 69.2855C88.0471 69.2855 86.9192 69.6132 85.9495 70.1863C85.174 70.6443 84.5037 71.262 83.9783 71.9892C85.0056 73.3992 85.6119 75.1401 85.6114 77.0156C85.6114 77.5758 85.1571 78.0294 84.5964 78.0294C84.0347 78.0294 83.5805 77.5756 83.5805 77.0156C83.5799 75.3658 82.9731 73.8658 81.966 72.7195L81.9644 72.7185C80.7667 71.353 79.0191 70.4978 77.0628 70.4966C75.7033 70.4977 74.4497 70.9091 73.4049 71.618C72.3619 72.3267 71.5332 73.3307 71.0421 74.5083C70.7234 75.2779 70.5444 76.1268 70.5444 77.0156C70.5444 77.5758 70.0907 78.0294 69.5295 78.0294C68.9688 78.0294 68.5142 77.5756 68.5142 77.0156C68.5142 76.1918 68.6341 75.394 68.8511 74.6386C68.0864 74.3281 67.2599 74.1587 66.409 74.1587C65.9276 74.1587 65.4381 74.214 64.948 74.3259C63.5028 74.6581 62.2898 75.4395 61.4074 76.4934C60.7698 77.2543 60.3128 78.1574 60.0739 79.1299C62.1737 79.169 64.2707 79.9787 65.8874 81.5622C66.2878 81.954 66.295 82.5965 65.9025 82.9971C65.5108 83.3975 64.8677 83.4041 64.4671 83.0133C63.1966 81.7705 61.5549 81.153 59.9073 81.1508C59.6121 81.1508 59.3179 81.1726 59.0259 81.2105L59.0221 81.2116H59.0205C57.6371 81.4005 56.306 82.03 55.2487 83.1067C54.0053 84.3776 53.3894 86.0156 53.389 87.6643C53.389 88.6097 53.5935 89.5562 54.0016 90.4289C54.3235 91.117 54.7706 91.7595 55.3458 92.3239L55.3469 92.325C56.001 92.9675 56.7541 93.4397 57.5568 93.7512C58.0794 93.9519 58.3393 94.5403 58.1368 95.0634C57.9344 95.5865 57.3466 95.8471 56.8241 95.6441C55.7722 95.2382 54.7796 94.6141 53.9239 93.774C53.5488 93.4049 53.2134 93.0098 52.9193 92.5942C52.1519 93.6931 51.7367 95.0076 51.7367 96.3448C51.7372 97.3813 51.9842 98.4287 52.5084 99.411C53.0977 100.512 53.9508 101.369 54.9527 101.956C55.7466 102.422 56.6329 102.712 57.5453 102.814L57.5435 102.755C57.5435 102.218 57.5935 101.69 57.6879 101.18C57.7899 100.629 58.3196 100.265 58.8705 100.366C59.4224 100.467 59.7866 100.999 59.6851 101.55C59.6124 101.941 59.5738 102.344 59.5738 102.755C59.5738 102.911 59.5798 103.068 59.5906 103.224C59.6026 103.39 59.62 103.548 59.645 103.699L59.6471 103.714C60.1118 106.902 62.8637 109.281 66.0879 109.281C66.2421 109.281 66.3983 109.274 66.5553 109.263H66.5569C67.9864 109.16 69.2699 108.607 70.2858 107.75C71.0033 107.144 71.5861 106.39 71.9883 105.539C72.2276 105.032 72.8332 104.815 73.3402 105.055C73.847 105.295 74.0635 105.899 73.8242 106.406C73.3915 107.321 72.7995 108.146 72.0848 108.852C72.4842 110.076 73.2336 111.132 74.2106 111.915C75.3334 112.812 76.7454 113.34 78.2694 113.34C78.4236 113.34 78.5787 113.336 78.7372 113.324H78.7388C79.7058 113.253 80.6003 112.977 81.3931 112.544C81.2683 111.959 81.1993 111.361 81.1993 110.758C81.1993 109.512 81.4744 108.244 82.0509 107.05C82.294 106.543 82.9013 106.332 83.406 106.576C83.9107 106.819 84.1235 107.426 83.8798 107.93C83.438 108.849 83.2295 109.809 83.2295 110.758C83.2295 111.423 83.3328 112.083 83.5307 112.713C84.0506 114.371 85.2266 115.818 86.9187 116.633C87.8332 117.075 88.7937 117.283 89.743 117.283C91.2473 117.283 92.7202 116.757 93.8843 115.802L93.888 115.799C94.5963 115.216 95.1922 114.477 95.6176 113.596L95.6187 113.593C96.017 112.769 96.2243 111.905 96.2623 111.043C96.2872 110.483 96.7615 110.049 97.3227 110.073C97.8816 110.099 98.3157 110.572 98.2919 111.132C98.2409 112.261 97.9684 113.401 97.4464 114.477L97.4474 114.476C97.0274 115.347 96.4781 116.114 95.8333 116.767C97.0306 118.489 99.0223 119.57 101.176 119.569C101.576 119.569 101.982 119.531 102.392 119.455C103.959 119.159 105.281 118.332 106.221 117.189C107.16 116.046 107.705 114.593 107.705 113.06C107.705 113.012 107.704 112.965 107.703 112.921V112.914C107.698 112.567 107.661 112.207 107.591 111.844C107.43 110.981 107.1 110.199 106.649 109.504C105.994 108.925 105.262 108.172 104.575 107.332C103.845 106.437 103.167 105.459 102.714 104.472C102.415 103.811 102.202 103.146 102.198 102.441C102.198 102.13 102.245 101.807 102.359 101.496C102.474 101.184 102.661 100.885 102.908 100.64C103.304 100.242 103.947 100.243 104.343 100.641C104.739 101.036 104.739 101.68 104.343 102.075C104.304 102.117 104.284 102.147 104.265 102.198C104.245 102.25 104.229 102.327 104.229 102.441C104.225 102.696 104.33 103.131 104.56 103.627C104.787 104.123 105.125 104.679 105.521 105.23C106.308 106.332 107.329 107.416 108.098 108.073L108.202 108.164L108.279 108.276C108.909 109.213 109.367 110.291 109.588 111.468C109.62 111.637 109.64 111.805 109.662 111.974C109.762 111.979 109.864 111.987 109.966 111.987C111.254 111.986 112.549 111.605 113.689 110.804C114.595 110.168 115.284 109.349 115.752 108.429C116.22 107.509 116.463 106.49 116.462 105.464C116.462 104.503 116.247 103.541 115.813 102.643C115.414 102.772 115.009 102.874 114.595 102.946C114.042 103.042 113.517 102.67 113.421 102.117C113.327 101.564 113.698 101.04 114.251 100.945C116.049 100.634 117.694 99.5879 118.714 97.9066C119.359 96.8482 119.663 95.6837 119.664 94.5298C119.664 92.839 119.005 91.1804 117.79 89.9516ZM71.2641 82.202C72.2356 81.0557 73.5239 80.2406 74.9078 79.7076C76.2945 79.1747 77.7841 78.9175 79.2115 78.9175C80.6013 78.9185 81.9342 79.1584 83.069 79.6794C83.5775 79.914 83.8 80.5173 83.5655 81.0265C83.33 81.5365 82.7266 81.7581 82.2175 81.5235C81.4323 81.1577 80.3615 80.9461 79.2115 80.9472C78.0306 80.9472 76.7682 81.1664 75.6378 81.6027C74.5052 82.0368 73.512 82.687 72.8136 83.513C72.4522 83.9396 71.8113 83.995 71.383 83.6324C70.9553 83.27 70.9017 82.6296 71.2641 82.202ZM94.375 106.209C93.1952 106.211 92.1235 106.078 91.1449 105.851C91.172 106.13 91.1904 106.439 91.1904 106.77C91.1904 107.433 91.1198 108.19 90.91 108.984C90.7005 109.778 90.3493 110.611 89.7951 111.412C89.4761 111.873 88.8439 111.988 88.3819 111.669C87.9213 111.349 87.8061 110.718 88.1259 110.255C88.5329 109.667 88.7891 109.06 88.9468 108.466C89.1042 107.871 89.1602 107.289 89.1602 106.77C89.1607 106.055 89.0532 105.461 88.9756 105.127C88.4802 104.902 88.0195 104.648 87.594 104.37C85.8948 103.268 84.7572 101.815 84.0415 100.431C83.5633 99.5078 83.2691 98.6112 83.1145 97.834C83.0255 97.3911 82.9816 96.9862 82.9816 96.6206C82.9816 96.0594 83.4357 95.6047 83.9974 95.6047C84.5581 95.6047 85.0124 96.0594 85.0124 96.6206C85.0106 96.918 85.0742 97.4108 85.2354 97.9709C85.3954 98.5342 85.651 99.1757 86.0207 99.8203C86.7615 101.112 87.9391 102.408 89.7539 103.249C90.9667 103.811 92.476 104.177 94.375 104.178C94.9357 104.178 95.3905 104.633 95.3905 105.193C95.3905 105.754 94.9357 106.209 94.375 106.209ZM101.524 98.7945C101.314 99.3144 100.724 99.5684 100.203 99.3589C99.6838 99.1517 99.431 98.5645 99.6359 98.0433L99.6426 98.0272C99.6489 98.0096 99.6588 97.9794 99.6728 97.9381C99.7 97.8577 99.738 97.7297 99.776 97.5712C99.8542 97.2509 99.9313 96.7984 99.9313 96.3012L99.9279 96.2285C98.5376 96.7018 97.2416 96.9178 96.0493 96.9178C94.2475 96.92 92.69 96.4261 91.4211 95.6761C90.1502 94.9261 89.1624 93.9329 88.4244 92.9268C87.5854 91.7817 86.4837 90.757 85.223 90.0298C83.9607 89.3025 82.5475 88.8707 81.0463 88.8696C79.7286 88.8728 78.3323 89.2006 76.8708 90.0006C75.4864 90.7625 74.5926 91.7763 74.0167 92.8878C73.4442 93.9982 73.2048 95.216 73.2054 96.3221C73.2026 97.3477 73.4177 98.2747 73.6997 98.8619C73.9396 99.3699 73.7231 99.9745 73.2161 100.215C72.7099 100.454 72.1041 100.239 71.8637 99.7314C71.4241 98.7948 71.1777 97.6181 71.175 96.3222C71.1755 95.036 71.4317 93.6315 72.0565 92.2866C70.7978 92.5722 69.6283 92.6991 68.5609 92.6979C67.9851 92.699 67.443 92.6589 66.9262 92.5959C66.8904 92.7304 66.8281 92.8607 66.7341 92.9748L66.7325 92.9757L66.7206 92.991C66.7097 93.0062 66.6907 93.0301 66.6658 93.0616C66.6163 93.1267 66.5425 93.2277 66.4498 93.359C66.2653 93.6205 66.0087 94.0091 65.7313 94.4986C65.1755 95.4756 64.5444 96.8508 64.2355 98.3974C64.1265 98.9478 63.5909 99.3049 63.0411 99.1941C62.4913 99.0844 62.1348 98.5504 62.245 97.999C62.613 96.1625 63.3358 94.6051 63.9648 93.4967C64.2919 92.9203 64.5926 92.4677 64.8125 92.1573C63.9844 91.9088 63.2675 91.6049 62.683 91.2955C61.3468 90.5855 60.6484 89.8724 60.5919 89.815C60.2028 89.4112 60.2148 88.7688 60.618 88.3802C61.0207 87.9916 61.6611 88.0035 62.0495 88.403L62.0506 88.4019L62.0604 88.4117L62.1229 88.4714C62.1826 88.5257 62.2797 88.6093 62.4121 88.7136C62.6769 88.9229 63.0862 89.2105 63.6332 89.4994C64.7288 90.079 66.3668 90.6662 68.5609 90.6685C70.1012 90.6685 71.9214 90.3742 74.0335 89.5624C74.5696 89.0642 75.1851 88.6082 75.8949 88.2208C77.631 87.2668 79.3834 86.8391 81.0462 86.8403C82.9424 86.8403 84.7095 87.3906 86.2372 88.2719C87.7665 89.1554 89.0641 90.3668 90.0615 91.7256C90.6666 92.5505 91.4649 93.346 92.4516 93.9268C93.4409 94.5075 94.6148 94.8863 96.0491 94.8875C97.0298 94.8875 98.139 94.7063 99.3905 94.2666C99.0877 93.7739 98.6307 93.2994 97.8807 92.8718C97.3923 92.5962 97.2208 91.9753 97.4965 91.488C97.7723 90.9995 98.392 90.8279 98.8795 91.1027C100.081 91.78 100.885 92.6764 101.351 93.6122C101.821 94.5477 101.962 95.4953 101.962 96.3018C101.958 97.7079 101.55 98.7218 101.524 98.7945ZM101.144 86.3547C98.7709 86.3558 96.6956 85.7154 95.0165 84.7461C94.7815 85.076 94.4635 85.4864 94.0548 85.9368C93.1366 86.944 91.7853 88.1282 89.9786 88.7773C89.4506 88.9662 88.8699 88.6905 88.681 88.1619C88.4927 87.6334 88.7677 87.0536 89.2958 86.8648C90.6271 86.3926 91.7417 85.457 92.5157 84.6115C92.8723 84.2252 93.1512 83.8626 93.3536 83.5804C92.3497 82.7339 91.5599 81.77 91.0194 80.7802C90.5027 79.8272 90.2043 78.8481 90.2015 77.893C90.2015 77.333 90.6558 76.8793 91.2163 76.8793C91.777 76.8793 92.2317 77.333 92.2317 77.893C92.2291 78.4064 92.4093 79.0913 92.8021 79.8087C93.1933 80.5283 93.7876 81.2794 94.5616 81.9502C96.1114 83.2939 98.3529 84.3239 101.143 84.3239C101.704 84.3239 102.158 84.7787 102.158 85.3398C102.159 85.9011 101.704 86.3547 101.144 86.3547ZM109.147 100.652C108.789 101.084 108.149 101.144 107.717 100.787C107.285 100.43 107.224 99.7898 107.581 99.3578C108.686 98.012 109.096 96.6596 109.1 95.3625C109.102 94.1826 108.743 93.0419 108.176 92.0835C107.613 91.1229 106.84 90.3567 106.095 89.93C105.599 89.6424 105.127 89.5111 104.754 89.5121C104.192 89.5121 103.738 89.0584 103.738 88.4972C103.738 87.9372 104.193 87.4824 104.754 87.4824C105.372 87.4824 105.976 87.6334 106.549 87.8861C107.121 88.1379 107.664 88.4929 108.167 88.927C109.171 89.7954 110.025 90.9794 110.561 92.3656C110.918 93.2894 111.132 94.3031 111.132 95.3623C111.135 97.1056 110.54 98.9703 109.147 100.652Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M97.8541 53.8047L114.08 28L109.516 48.2854L125.111 39.9537L114.968 54.5338L130 54.952L103.035 65.7647L102.988 59.5159L89.6884 65.7514L96.1029 46.8655L97.8541 53.8047ZM64.1629 37.8906L70.9556 34.8326L82.8027 46.4743L87.3335 61.4061L76.8657 66.1165L70.4113 55.6154L32.667 72.6103L30 66.693L67.7448 49.7048L64.1629 37.8906Z"
        fill="black"
      />
    </svg>
  );
}

export default Logo;
