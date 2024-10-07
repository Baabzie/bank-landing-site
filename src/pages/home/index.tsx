import RequestInviteButton from "@/components/requestInviteButton/RequestInviteButton";
import styles from "./index.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["first-row"]}>
        <div className={styles["first-row-left"]}>
          <div className={styles["first-row-left-content"]}>
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <RequestInviteButton />
          </div>
        </div>
        <div className={styles["first-row-right"]}>
          <img
            src="/images/image-mockups.png"
            alt="Four phones showing the Easybank app in use."
          />
        </div>
      </div>
      <div className={styles["second-row"]}>
        <div className={styles["second-row-upper"]}>
          <div className={styles["second-row-text-content"]}>
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into a
              financial hub. Control your finances like never before.
            </p>
          </div>
        </div>

        <div className={styles["second-row-lower"]}>
          <div>
            <img src="/images/icon-online.svg" alt="Icon for online banking." />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div>
            <img
              src="/images/icon-budgeting.svg"
              alt="Icon for simple budgeting."
            />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limit
            </p>
          </div>
          <div>
            <img
              src="/images/icon-onboarding.svg"
              alt="Icon for fast onboarding."
            />
            <h3>Fast Onboarding</h3>
            <p>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div>
            <img src="/images/icon-api.svg" alt="Icon for open API." />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["third-row"]}>
        <div className={styles["third-row-upper"]}>
          <div className={styles["third-row-text-content"]}>
            <h2>Latest Articles</h2>
          </div>
        </div>
        '
        <div className={styles["third-row-lower"]}>
          <div>
            <img src="/images/image-currency.jpg" alt="A picture of money." />
          </div>
          <div>
            <img
              src="/images/image-restaurant.jpg"
              alt="A picture of a table with food."
            />
          </div>
          <div>
            <img
              src="/images/image-plane.jpg"
              alt="A picture of an airplane wing."
            />
          </div>
          <div>
            <img
              src="/images/image-confetti.jpg"
              alt="A picture of confetti flying in the air."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
