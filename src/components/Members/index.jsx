// Libraries
import React, { useCallback, useMemo, useState } from "react";
import clsx from "clsx";
import { Avatar, Popover, Button, Divider } from "antd";

// Static
import memberJsonData from "@site/static/json/members.json";

// Icons
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";

// Styles
import styles from "./styles.module.scss";

// Constants
import { ROLES } from "@site/constants";

export const Members = () => {
  // State
  const [state, setState] = useState({
    memberHoverIdx: -1,
  });
  const { memberHoverIdx } = state;

  // Handlers
  const calculateTransform = useCallback(
    (currentIndex) => {
      let transform = {
        scale: 1,
        top: 0,
      };

      if (memberHoverIdx === -1) {
        return transform;
      }

      const distance = Math.abs(memberHoverIdx - currentIndex);

      switch (distance) {
        case 0:
          transform.scale = 1.4;
          transform.top = -8;
          break;
        case 1:
          transform.scale = 1.3;
          transform.top = -6;
          break;
        case 2:
          transform.scale = 1.2;
          transform.top = -4;
          break;
        case 3:
          transform.scale = 1.1;
          transform.top = -2;
          break;
        default:
          break;
      }

      return transform;
    },
    [memberHoverIdx]
  );

  const renderMembers = useCallback(
    (members) => {
      return (
        <div className={styles.member__list}>
          {Array.isArray(members) && members.length
            ? members.map((member, idx) => {
                const { key, name, nickName, role, imageUrl, mail, googleUrl } =
                  member;

                const { scale, top } = calculateTransform(idx);

                return (
                  <Popover
                    key={key}
                    getPopupContainer={() =>
                      document.getElementById("team-members")
                    }
                    overlayClassName="w-72"
                    overlayInnerStyle={{
                      padding: 0,
                    }}
                    mouseEnterDelay={0.5}
                    content={
                      <div className="relative flex flex-col items-center w-full p-5">
                        <div
                          className="absolute top-0 w-28 h-[5px] rounded-b-full"
                          style={{
                            background: ROLES[role]?.color,
                          }}
                        />
                        <Avatar src={imageUrl} size={100} />
                        <h3 className="mt-5 mb-1">{name}</h3>
                        <strong>{nickName}</strong>
                        <Divider />
                        <div className="flex items-center justify-center w-full gap-2.5">
                          <a href={`mailto: ${mail}`}>
                            <Button shape="circle" icon={<MailOutlined />} />
                          </a>
                          <a href={googleUrl} target="_blank">
                            <Button shape="circle" icon={<GoogleOutlined />} />
                          </a>
                        </div>
                      </div>
                    }
                  >
                    <div
                      className={clsx(styles.member__item, "group-hover:ml-5")}
                      style={{
                        transform: `scale(${scale})`,
                        top,
                      }}
                      onMouseEnter={() =>
                        setState((state) => ({ ...state, memberHoverIdx: idx }))
                      }
                    >
                      <img src={imageUrl} width={50} height={50} />
                    </div>
                  </Popover>
                );
              })
            : null}
        </div>
      );
    },
    [memberHoverIdx]
  );

  return (
    <div
      id="team-members"
      className="group w-fit"
      onMouseLeave={() => {
        setState((state) => ({ ...state, memberHoverIdx: -1 }));
      }}
    >
      <h2 className="mb-10">Team Members</h2>

      {renderMembers(memberJsonData)}
    </div>
  );
};
