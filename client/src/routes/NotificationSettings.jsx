import styles from "./../styles/Notification.module.css";

// import { useCallback, useEffect } from "react";
// Wagmi Imports
import { useAccount, useSignMessage } from "wagmi";

// W3I Imports
import {
  //   useNotifications,
  usePrepareRegistration,
  useRegister,
  useSubscribe,
  useSubscription,
  useUnsubscribe,
  useWeb3InboxAccount,
} from "@web3inbox/react";
import { sendNotification } from "./../utils/fetchNotify";
import Messages from "./../components/Messages";

// const notificationsPerPage = 5;
// const isInfiniteScroll = true;

const NotificationSettings = () => {
  // Wagmi
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const { isRegistered, data: account } = useWeb3InboxAccount(
    `eip155:1:${address}`
  );
  console.log(account);

  // Registration
  const { prepareRegistration } = usePrepareRegistration();
  const { register, isLoading: isRegistering } = useRegister();

  const handleRegistration = async () => {
    try {
      const { message, registerParams } = await prepareRegistration();
      const signature = await signMessageAsync({ message: message });
      await register({ registerParams, signature });
    } catch (registerIdentityError) {
      console.error(registerIdentityError, "💥");
    }
  };

  // Subscription
  const { subscribe, isLoading: isSubscribing } = useSubscribe();
  const { unsubscribe, isLoading: isUnsubscribing } = useUnsubscribe();
  const { data: subscription } = useSubscription();
  const isSubscribed = Boolean(subscription);

  // Handle Test Notification
  //   const handleTestNotification = async () => {
  //     if (isSubscribed) {
  //       try {
  //         console.log({ address });
  //         await sendNotification({
  //           accounts: [`eip155:1:${address}`],
  //           notification: {
  //             title: "GM Stable Test",
  //             body: "Hack it until you make it!",
  //             icon: `${window.location.origin}/WalletConnect-blue.svg`,
  //             url: window.location.origin,
  //             type: "805e6d86-4b35-4b9a-b81a-a2f761e0e687",
  //           },
  //         });
  //       } catch (error) {
  //         console.error("Notification Error", error);
  //       }
  //     }
  //   };

  // Get Notifications
  //   const { data: notificationsData } = useNotifications(
  //     notificationsPerPage,
  //     isInfiniteScroll
  //   );

  return (
    <div className="h-screen">
      <main className={styles.main}>
        <div className={styles.card}>
          <h1> W3I Stable Test</h1>
          <div className={styles.cardContainer}>
            <div className={styles.btnContainer}>
              <span>Connect Wallet</span>
              <w3m-button />
            </div>
            <div className={styles.btnContainer}>
              <span>{isRegistered ? `Registered` : `Not Registered`}</span>
              <button
                // disabled={isRegistering || isRegistered}
                className={`${styles.btn} ${!isRegistered && styles.btnInfo}`}
                onClick={handleRegistration}
              >
                {isRegistered ? "Already Registered" : "Register"}
              </button>
            </div>
            <div className={styles.btnContainer}>
              <span>{isSubscribed ? `Subscribed` : `Not Subscribed`}</span>
              <button
                disabled={isSubscribing || isUnsubscribing}
                className={`${styles.btn} ${!isSubscribed && styles.btnInfo}`}
                onClick={isSubscribed ? unsubscribe : subscribe}
              >
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
              </button>
            </div>
            {/* <div className={styles.btnContainer}>
              <span>Test Notification</span>

              <button
                disabled={!isRegistered && !isSubscribed}
                className={styles.btn}
                onClick={handleTestNotification}
              >
                Test Notification
              </button>
            </div> */}
            <hr />
          </div>
          {/* <Messages /> */}
        </div>
      </main>
    </div>
  );
};

export default NotificationSettings;
