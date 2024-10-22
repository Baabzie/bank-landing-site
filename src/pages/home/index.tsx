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
          <div className={styles["background-div"]}>
            <img
              className={styles["background-img"]}
              src="./images/bg-intro-desktop.svg"
              alt="Background image"
            />
          </div>
          <img
            src="./images/image-mockups.png"
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
            <div className={styles["article-text-div"]}>
              <p className={styles["author-text"]}>By Claire Robinson</p>
              <h3>Receive money in any currency with no fees</h3>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/image-restaurant.jpg"
              alt="A picture of a table with food."
            />
            <div className={styles["article-text-div"]}>
              <p className={styles["author-text"]}>By Wilson Hutton</p>
              <h3>Treat yourself without worrying about money</h3>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/image-plane.jpg"
              alt="A picture of an airplane wing."
            />
            <div className={styles["article-text-div"]}>
              <p className={styles["author-text"]}>By Wilson Hutton</p>
              <h3>Take your Easybank card wherever you go</h3>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div>
            <img
              src="/images/image-confetti.jpg"
              alt="A picture of confetti flying in the air."
            />
            <div className={styles["article-text-div"]}>
              <p className={styles["author-text"]}>By Claire Robinson</p>
              <h3>Our invite-only Beta accounts are now live!</h3>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
